/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";

// TypeScript types for the Gradient system
type UniformType =
  | "float"
  | "int"
  | "vec2"
  | "vec3"
  | "vec4"
  | "mat4"
  | "array"
  | "struct";

// Utility functions
function normalizeColor(hexCode: number): number[] {
  return [
    ((hexCode >> 16) & 255) / 255,
    ((hexCode >> 8) & 255) / 255,
    (255 & hexCode) / 255,
  ];
}

// MiniGL WebGL wrapper class
class MiniGl {
  canvas!: HTMLCanvasElement;
  gl!: WebGLRenderingContext;
  meshes!: any[];
  commonUniforms: any;
  width?: number;
  height?: number;
  debug!: (...args: any[]) => void;
  lastDebugMsg?: Date;
  Material: any;
  Uniform: any;
  PlaneGeometry: any;
  Mesh: any;
  Attribute: any;

  constructor(
    canvas: HTMLCanvasElement,
    width?: number | null,
    height?: number | null,
    debug = false
  ) {
    const _miniGl = this;
    const debug_output =
      document.location.search.toLowerCase().indexOf("debug=webgl") !== -1;

    _miniGl.canvas = canvas;
    _miniGl.gl = _miniGl.canvas.getContext("webgl", { antialias: true })!;
    _miniGl.meshes = [];

    const context = _miniGl.gl;

    if (width && height) this.setSize(width, height);

    _miniGl.debug =
      debug && debug_output
        ? function (e: string, ...args: any[]) {
            const t = new Date();
            if (
              !_miniGl.lastDebugMsg ||
              t.getTime() - _miniGl.lastDebugMsg.getTime() > 1000
            ) {
              console.log("---");
            }
            console.log(
              t.toLocaleTimeString() +
                Array(Math.max(0, 32 - e.length)).join(" ") +
                e +
                ": ",
              ...args
            );
            _miniGl.lastDebugMsg = t;
          }
        : () => {};

    // Define Material class
    _miniGl.Material = class {
      uniforms: any;
      uniformInstances!: any[];
      vertexSource!: string;
      Source!: string;
      vertexShader!: WebGLShader;
      fragmentShader!: WebGLShader;
      program!: WebGLProgram;

      constructor(
        vertexShaders: string,
        fragments: string,
        uniforms: any = {}
      ) {
        const material = this;

        function getShaderByType(type: number, source: string): WebGLShader {
          const shader = context.createShader(type)!;
          context.shaderSource(shader, source);
          context.compileShader(shader);
          if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
            const errorLog = context.getShaderInfoLog(shader);
            console.log("VERTEX SHADER SOURCE:\n", source); 
            throw new Error(errorLog || "Unknown shader compilation error");
          }

          _miniGl.debug("Material.compileShaderSource", { source });
          return shader;
        }

        function getUniformVariableDeclarations(
          uniforms: any,
          type: string
        ): string {
          return Object.entries(uniforms)
            .map(([uniform, value]: [string, any]) =>
              value.getDeclaration(uniform, type)
            )
            .join("\n");
        }

        material.uniforms = uniforms;
        material.uniformInstances = [];

        const prefix = "\n              precision highp float;\n            ";

        material.vertexSource = `
              ${prefix}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${getUniformVariableDeclarations(_miniGl.commonUniforms, "vertex")}
              ${getUniformVariableDeclarations(uniforms, "vertex")}
              ${vertexShaders}
            `;

        material.Source = `
              ${prefix}
              ${getUniformVariableDeclarations(_miniGl.commonUniforms, "fragment")}
              ${getUniformVariableDeclarations(uniforms, "fragment")}
              ${fragments}
            `;

        material.vertexShader = getShaderByType(
          context.VERTEX_SHADER,
          material.vertexSource
        );
        material.fragmentShader = getShaderByType(
          context.FRAGMENT_SHADER,
          material.Source
        );
        material.program = context.createProgram()!;

        context.attachShader(material.program, material.vertexShader);
        context.attachShader(material.program, material.fragmentShader);
        context.linkProgram(material.program);

        if (
          !context.getProgramParameter(material.program, context.LINK_STATUS)
        ) {
          console.error(context.getProgramInfoLog(material.program));
        }

        context.useProgram(material.program);
        material.attachUniforms(undefined, _miniGl.commonUniforms);
        material.attachUniforms(undefined, material.uniforms);
      }

      attachUniforms(name: string | undefined, uniforms: any): void {
        const material = this;
        if (name === undefined) {
          Object.entries(uniforms).forEach(([name, uniform]) => {
            material.attachUniforms(name, uniform);
          });
        } else if (uniforms.type === "array") {
          uniforms.value.forEach((uniform: any, i: number) =>
            material.attachUniforms(`${name}[${i}]`, uniform)
          );
        } else if (uniforms.type === "struct") {
          Object.entries(uniforms.value).forEach(([uniform, i]) =>
            material.attachUniforms(`${name}.${uniform}`, i)
          );
        } else {
          _miniGl.debug("Material.attachUniforms", { name, uniform: uniforms });
          material.uniformInstances.push({
            uniform: uniforms,
            location: context.getUniformLocation(material.program, name),
          });
        }
      }
    };

    // Define Uniform class
    _miniGl.Uniform = class {
      type: UniformType;
      value: any;
      typeFn: string;
      excludeFrom?: string;
      transpose?: boolean;

      constructor(e: any) {
        this.type = "float";
        Object.assign(this, e);
        this.typeFn =
          {
            float: "1f",
            int: "1i",
            vec2: "2fv",
            vec3: "3fv",
            vec4: "4fv",
            mat4: "Matrix4fv",
          }[this.type as string] || "1f";
        this.update();
      }

      update(value?: any): void {
        if (this.value !== undefined) {
          (context as any)[`uniform${this.typeFn}`](
            value,
            this.typeFn.indexOf("Matrix") === 0 ? this.transpose : this.value,
            this.typeFn.indexOf("Matrix") === 0 ? this.value : null
          );
        }
      }

      getDeclaration(name: string, type: string, length?: number): string {
        const uniform = this;
        if (uniform.excludeFrom !== type) {
          if (uniform.type === "array") {
            return (
              uniform.value[0].getDeclaration(
                name,
                type,
                uniform.value.length
              ) + `\nconst int ${name}_length = ${uniform.value.length};`
            );
          }
          if (uniform.type === "struct") {
            let name_no_prefix = name.replace("u_", "");
            name_no_prefix =
              name_no_prefix.charAt(0).toUpperCase() + name_no_prefix.slice(1);
            return (
              `uniform struct ${name_no_prefix} \n{\n` +
              Object.entries(uniform.value)
                .map(([name, uniform]: [string, any]) =>
                  uniform.getDeclaration(name, type).replace(/^uniform/, "")
                )
                .join("") +
              `\n} ${name}${length && length > 0 ? `[${length}]` : ""};`
            );
          }
          return `uniform ${uniform.type} ${name}${length && length > 0 ? `[${length}]` : ""};`;
        }
        return "";
      }
    };

    // Define PlaneGeometry class
    _miniGl.PlaneGeometry = class {
      width: number = 1;
      height: number = 1;
      orientation: string = "xz";
      attributes: any;
      vertexCount: number = 0;
      quadCount: number = 0;
      xSegCount: number = 0;
      ySegCount: number = 0;

      constructor(
        width?: number,
        height?: number,
        n?: number,
        i?: number,
        orientation?: string
      ) {
        context.createBuffer();
        this.attributes = {
          position: new _miniGl.Attribute({
            target: context.ARRAY_BUFFER,
            size: 3,
          }),
          uv: new _miniGl.Attribute({
            target: context.ARRAY_BUFFER,
            size: 2,
          }),
          uvNorm: new _miniGl.Attribute({
            target: context.ARRAY_BUFFER,
            size: 2,
          }),
          index: new _miniGl.Attribute({
            target: context.ELEMENT_ARRAY_BUFFER,
            size: 3,
            type: context.UNSIGNED_SHORT,
          }),
        };
        this.setTopology(n, i);
        this.setSize(width, height, orientation);
      }

      setTopology(e = 1, t = 1): void {
        const n = this;
        n.xSegCount = e;
        n.ySegCount = t;
        n.vertexCount = (n.xSegCount + 1) * (n.ySegCount + 1);
        n.quadCount = n.xSegCount * n.ySegCount * 2;
        n.attributes.uv.values = new Float32Array(2 * n.vertexCount);
        n.attributes.uvNorm.values = new Float32Array(2 * n.vertexCount);
        n.attributes.index.values = new Uint16Array(3 * n.quadCount);

        for (let e = 0; e <= n.ySegCount; e++) {
          for (let t = 0; t <= n.xSegCount; t++) {
            const i = e * (n.xSegCount + 1) + t;
            n.attributes.uv.values[2 * i] = t / n.xSegCount;
            n.attributes.uv.values[2 * i + 1] = 1 - e / n.ySegCount;
            n.attributes.uvNorm.values[2 * i] = (t / n.xSegCount) * 2 - 1;
            n.attributes.uvNorm.values[2 * i + 1] = 1 - (e / n.ySegCount) * 2;

            if (t < n.xSegCount && e < n.ySegCount) {
              const s = e * n.xSegCount + t;
              n.attributes.index.values[6 * s] = i;
              n.attributes.index.values[6 * s + 1] = i + 1 + n.xSegCount;
              n.attributes.index.values[6 * s + 2] = i + 1;
              n.attributes.index.values[6 * s + 3] = i + 1;
              n.attributes.index.values[6 * s + 4] = i + 1 + n.xSegCount;
              n.attributes.index.values[6 * s + 5] = i + 2 + n.xSegCount;
            }
          }
        }

        n.attributes.uv.update();
        n.attributes.uvNorm.update();
        n.attributes.index.update();
        _miniGl.debug("Geometry.setTopology", {
          uv: n.attributes.uv,
          uvNorm: n.attributes.uvNorm,
          index: n.attributes.index,
        });
      }

      setSize(width = 1, height = 1, orientation = "xz"): void {
        const geometry = this;
        geometry.width = width;
        geometry.height = height;
        geometry.orientation = orientation;

        if (
          !geometry.attributes.position.values ||
          geometry.attributes.position.values.length !==
            3 * geometry.vertexCount
        ) {
          geometry.attributes.position.values = new Float32Array(
            3 * geometry.vertexCount
          );
        }

        const o = width / -2;
        const r = height / -2;
        const segment_width = width / geometry.xSegCount;
        const segment_height = height / geometry.ySegCount;

        for (let yIndex = 0; yIndex <= geometry.ySegCount; yIndex++) {
          const t = r + yIndex * segment_height;
          for (let xIndex = 0; xIndex <= geometry.xSegCount; xIndex++) {
            const r = o + xIndex * segment_width;
            const l = yIndex * (geometry.xSegCount + 1) + xIndex;
            geometry.attributes.position.values[
              3 * l + "xyz".indexOf(orientation[0]!)
            ] = r;
            geometry.attributes.position.values[
              3 * l + "xyz".indexOf(orientation[1]!)
            ] = -t;
          }
        }

        geometry.attributes.position.update();
        _miniGl.debug("Geometry.setSize", {
          position: geometry.attributes.position,
        });
      }
    };

    // Define Mesh class
    _miniGl.Mesh = class {
      geometry: any;
      material: any;
      wireframe: boolean = false;
      attributeInstances: any[] = [];

      constructor(geometry: any, material: any) {
        const mesh = this;
        mesh.geometry = geometry;
        mesh.material = material;

        Object.entries(mesh.geometry.attributes).forEach(
          ([e, attribute]: [string, any]) => {
            mesh.attributeInstances.push({
              attribute: attribute,
              location: attribute.attach(e, mesh.material.program),
            });
          }
        );

        _miniGl.meshes.push(mesh);
        _miniGl.debug("Mesh.constructor", { mesh });
      }

      draw(): void {
        context.useProgram(this.material.program);
        this.material.uniformInstances.forEach(({ uniform, location }: any) =>
          uniform.update(location)
        );
        this.attributeInstances.forEach(({ attribute, location }: any) =>
          attribute.use(location)
        );
        context.drawElements(
          this.wireframe ? context.LINES : context.TRIANGLES,
          this.geometry.attributes.index.values.length,
          context.UNSIGNED_SHORT,
          0
        );
      }

      remove(): void {
        _miniGl.meshes = _miniGl.meshes.filter((e) => e !== this);
      }
    };

    // Define Attribute class
    _miniGl.Attribute = class {
      type: number;
      normalized: boolean = false;
      buffer: WebGLBuffer;
      target!: number;
      size!: number;
      values?: Float32Array | Uint16Array;

      constructor(e: any) {
        this.type = context.FLOAT;
        this.buffer = context.createBuffer()!;
        Object.assign(this, e);
        this.update();
      }

      update(): void {
        if (this.values !== undefined) {
          context.bindBuffer(this.target, this.buffer);
          context.bufferData(this.target, this.values, context.STATIC_DRAW);
        }
      }

      attach(e: string, t: WebGLProgram): number {
        const n = context.getAttribLocation(t, e);
        if (this.target === context.ARRAY_BUFFER) {
          context.enableVertexAttribArray(n);
          context.vertexAttribPointer(
            n,
            this.size,
            this.type,
            this.normalized,
            0,
            0
          );
        }
        return n;
      }

      use(e: number): void {
        context.bindBuffer(this.target, this.buffer);
        if (this.target === context.ARRAY_BUFFER) {
          context.enableVertexAttribArray(e);
          context.vertexAttribPointer(
            e,
            this.size,
            this.type,
            this.normalized,
            0,
            0
          );
        }
      }
    };

    const a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    _miniGl.commonUniforms = {
      projectionMatrix: new _miniGl.Uniform({ type: "mat4", value: a }),
      modelViewMatrix: new _miniGl.Uniform({ type: "mat4", value: a }),
      resolution: new _miniGl.Uniform({ type: "vec2", value: [1, 1] }),
      aspectRatio: new _miniGl.Uniform({ type: "float", value: 1 }),
    };
  }

  setSize(e = 640, t = 480): void {
    this.width = e;
    this.height = t;
    this.canvas.width = e;
    this.canvas.height = t;
    this.gl.viewport(0, 0, e, t);
    this.commonUniforms.resolution.value = [e, t];
    this.commonUniforms.aspectRatio.value = e / t;
    this.debug("MiniGL.setSize", { width: e, height: t });
  }

  setOrthographicCamera(e = 0, t = 0, n = 0, i = -2000, s = 2000): void {
    this.commonUniforms.projectionMatrix.value = [
      2 / this.width!,
      0,
      0,
      0,
      0,
      2 / this.height!,
      0,
      0,
      0,
      0,
      2 / (i - s),
      0,
      e,
      t,
      n,
      1,
    ];
    this.debug(
      "setOrthographicCamera",
      this.commonUniforms.projectionMatrix.value
    );
  }

  render(): void {
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clearDepth(1);
    this.meshes.forEach((e) => e.draw());
  }
}

// Gradient class
class Gradient {
  el!: HTMLCanvasElement;
  gradientColors!: string[];
  cssVarRetries = 0;
  maxCssVarRetries = 200;
  angle = 0;
  isLoadedClass = false;
  isScrolling = false;
  isStatic = false;
  scrollingTimeout?: number;
  scrollingRefreshDelay = 200;
  isIntersecting = false;
  shaderFiles?: any;
  vertexShader?: string;
  sectionColors?: number[][];
  conf?: any;
  uniforms?: any;
  t = 1253106;
  last = 0;
  width?: number;
  minWidth = 1111;
  height?: number;
  minHeight = 1111;
  xSegCount?: number;
  ySegCount?: number;
  mesh?: any;
  material?: any;
  geometry?: any;
  minigl?: MiniGl;
  scrollObserver?: any;
  amp = 320;
  seed = 5;
  freqX = 0.00014;
  freqY = 0.00029;
  freqDelta = 0.00001;
  activeColors = [1, 1, 1, 1];
  isMetaKey = false;
  isGradientLegendVisible = false;
  isMouseDown = false;

  constructor() {}

  handleScroll = (): void => {
    clearTimeout(this.scrollingTimeout);
    this.scrollingTimeout = window.setTimeout(
      this.handleScrollEnd,
      this.scrollingRefreshDelay
    );
    if (this.isGradientLegendVisible) this.hideGradientLegend();
    if (this.conf.playing) {
      this.isScrolling = true;
      this.pause();
    }
  };

  handleScrollEnd = (): void => {
    this.isScrolling = false;
    if (this.isIntersecting) this.play();
  };

  resize = (): void => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.minigl!.setSize(this.width, this.height);
    this.minigl!.setOrthographicCamera();
    this.xSegCount = Math.ceil(this.width * this.conf.density[0]);
    this.ySegCount = Math.ceil(this.height * this.conf.density[1]);
    this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount);
    this.mesh.geometry.setSize(this.width, this.height);
    this.mesh.material.uniforms.u_shadow_power.value = this.width < 600 ? 5 : 6;
  };

  animate = (e: number): void => {
    if (!this.shouldSkipFrame(e) || this.isMouseDown) {
      if (this.t !== undefined && this.last !== undefined) {
        this.t += Math.min(e - this.last, 1000 / 15);
        this.last = e;

        if (this.isMouseDown) {
          let delta = 160;
          if (this.isMetaKey) delta = -160;
          this.t += delta;
        }

        this.mesh.material.uniforms.u_time.value = this.t;
        this.minigl!.render();
      }
    }

    if (this.last !== 0 && this.isStatic) {
      this.minigl!.render();
      this.disconnect();
      return;
    }

    if (this.conf.playing || this.isMouseDown) {
      requestAnimationFrame(this.animate);
    }
  };

  addIsLoadedClass = (): void => {
    if (!this.isLoadedClass) {
      this.isLoadedClass = true;
      this.el.classList.add("isLoaded");
    }
  };

  pause = (): void => {
    this.conf.playing = false;
  };

  play = (): void => {
    requestAnimationFrame(this.animate);
    this.conf.playing = true;
  };

  initGradient = (options?: {
    el?: HTMLCanvasElement;
    gradientColors?: string[];
  }): Gradient => {
    const { el, gradientColors = [] } = options || {};
    this.el = el || document.createElement("canvas");
    this.gradientColors = gradientColors;
    this.connect();
    return this;
  };

  async connect(): Promise<void> {
    this.shaderFiles = {
      vertex: `varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,
      noise: ` 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //  vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,
      blend: ` 

vec3 blendNormal(vec3 base, vec3 blend) {
\treturn blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
\treturn 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
\treturn base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
\treturn (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
\treturn blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
\treturn (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
\treturn (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
\treturn (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
\treturn vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
\treturn (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
\treturn (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
\treturn vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
\treturn (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
\treturn (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
\treturn vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
\treturn (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
\treturn max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
\treturn vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
\treturn (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
\t// Note : Same implementation as BlendSubtractf
\treturn max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
\t// Note : Same implementation as BlendSubtract
\treturn max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
\treturn (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
\t// Note : Same implementation as BlendAddf
\treturn min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
\t// Note : Same implementation as BlendAdd
\treturn min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
\treturn (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
\treturn blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
\treturn vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
\treturn (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,
      fragment: `varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`,
    };

    this.conf = {
      presetName: "",
      wireframe: false,
      density: [0.02, 0.05],
      zoom: 1,
      rotation: 0,
      playing: true,
    };

    this.minigl = new MiniGl(this.el, null, null, true);
    this.init();
    this.addIsLoadedClass();
  }

  disconnect(): void {
    if (this.scrollObserver) {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("mousedown", this.handleMouseDown);
      window.removeEventListener("mouseup", this.handleMouseUp);
      this.scrollObserver.disconnect();
    }
    window.removeEventListener("resize", this.resize);
  }

  handleMouseDown = (): void => {};
  handleMouseUp = (): void => {};

  initMaterial(): any {
    this.uniforms = {
      u_time: new this.minigl!.Uniform({ value: 0 }),
      u_shadow_power: new this.minigl!.Uniform({ value: 5 }),
      u_darken_top: new this.minigl!.Uniform({
        value: this.el.dataset.jsDarkenTop === "" ? 1 : 0,
      }),
      u_active_colors: new this.minigl!.Uniform({
        value: this.activeColors,
        type: "vec4",
      }),
      u_global: new this.minigl!.Uniform({
        value: {
          noiseFreq: new this.minigl!.Uniform({
            value: [this.freqX, this.freqY],
            type: "vec2",
          }),
          noiseSpeed: new this.minigl!.Uniform({ value: 0.000005 }),
        },
        type: "struct",
      }),
      u_vertDeform: new this.minigl!.Uniform({
        value: {
          incline: new this.minigl!.Uniform({
            value: Math.sin(this.angle) / Math.cos(this.angle),
          }),
          offsetTop: new this.minigl!.Uniform({ value: -0.5 }),
          offsetBottom: new this.minigl!.Uniform({ value: -0.5 }),
          noiseFreq: new this.minigl!.Uniform({
            value: [3, 4],
            type: "vec2",
          }),
          noiseAmp: new this.minigl!.Uniform({ value: this.amp }),
          noiseSpeed: new this.minigl!.Uniform({ value: 10 }),
          noiseFlow: new this.minigl!.Uniform({ value: 3 }),
          noiseSeed: new this.minigl!.Uniform({ value: this.seed }),
        },
        type: "struct",
        excludeFrom: "fragment",
      }),
      u_baseColor: new this.minigl!.Uniform({
        value: this.sectionColors![0],
        type: "vec3",
        excludeFrom: "fragment",
      }),
      u_waveLayers: new this.minigl!.Uniform({
        value: [],
        excludeFrom: "fragment",
        type: "array",
      }),
    };

    for (let e = 1; e < this.sectionColors!.length; e += 1) {
      this.uniforms.u_waveLayers.value.push(
        new this.minigl!.Uniform({
          value: {
            color: new this.minigl!.Uniform({
              value: this.sectionColors![e],
              type: "vec3",
            }),
            noiseFreq: new this.minigl!.Uniform({
              value: [
                2 + e / this.sectionColors!.length,
                3 + e / this.sectionColors!.length,
              ],
              type: "vec2",
            }),
            noiseSpeed: new this.minigl!.Uniform({ value: 11 + 0.3 * e }),
            noiseFlow: new this.minigl!.Uniform({ value: 6.5 + 0.3 * e }),
            noiseSeed: new this.minigl!.Uniform({ value: this.seed + 10 * e }),
            noiseFloor: new this.minigl!.Uniform({ value: 0.1 }),
            noiseCeil: new this.minigl!.Uniform({ value: 0.63 + 0.07 * e }),
          },
          type: "struct",
        })
      );
    }

    this.vertexShader = [
      this.shaderFiles!.noise,
      this.shaderFiles!.blend,
      this.shaderFiles!.vertex,
    ].join("\n\n");

    return new this.minigl!.Material(
      this.vertexShader,
      this.shaderFiles!.fragment,
      this.uniforms
    );
  }

  initMesh(): void {
    this.material = this.initMaterial();
    this.geometry = new this.minigl!.PlaneGeometry();
    this.mesh = new this.minigl!.Mesh(this.geometry, this.material);
  }

  shouldSkipFrame(e: number): boolean {
    return (
      !!window.document.hidden ||
      !this.conf.playing ||
      parseInt(e.toString(), 10) % 2 === 0
    );
  }

  updateFrequency(e: number): void {
    this.freqX += e;
    this.freqY += e;
  }

  toggleColor(index: number): void {
    this.activeColors[index] = this.activeColors[index] === 0 ? 1 : 0;
  }

  showGradientLegend(): void {
    if (this.width! > this.minWidth) {
      this.isGradientLegendVisible = true;
      document.body.classList.add("isGradientLegendVisible");
    }
  }

  hideGradientLegend(): void {
    this.isGradientLegendVisible = false;
    document.body.classList.remove("isGradientLegendVisible");
  }

  init(): void {
    this.initGradientColors();
    this.initMesh();
    this.resize();
    requestAnimationFrame(this.animate);
    window.addEventListener("resize", this.resize);
  }

  initGradientColors(): void {
    this.sectionColors = (this.gradientColors || ["#ef008f", "#6ec3f4"]).map(
      (hex) => normalizeColor(parseInt(hex.replace("#", "0x"), 16))
    );
  }
}

interface GradientWaveProps {
  gradientColors?: string[];
  width?: string | number;
  height?: string | number;
  amp?: number;
  freqX?: number;
  freqY?: number;
  speed?: number;
  rotation?: number;
  darkenTop?: boolean;
  density?: [number, number];
  onInit?: (gradient: Gradient) => void;
}

export function GradientWave({
  gradientColors = ["#ef008f", "#6ec3f4", "#7038ff", "#ffba27"],
  width = "100%",
  height = "100%",
  amp = 200,
  freqX = 0.0001,
  freqY = 0.0002,
  speed = 1,
  rotation = 0,
  darkenTop = true,
  density = [0.5, 0.5],
  onInit,
}: GradientWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<Gradient | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const gradient = new Gradient();

    // Override defaults
    gradient.amp = amp;
    gradient.freqX = freqX;
    gradient.freqY = freqY;
    gradient.angle = rotation;
    gradient.conf = { ...gradient.conf, density };

    const canvas =
      containerRef.current.querySelector("canvas") ??
      document.createElement("canvas");
    if (darkenTop) canvas.dataset.jsDarkenTop = "";

    gradient.initGradient({ el: canvas, gradientColors });
    containerRef.current.appendChild(canvas);
    gradientRef.current = gradient;

    if (onInit) onInit(gradient);

    return () => {
      gradient.disconnect();
      if (containerRef.current?.contains(canvas))
        containerRef.current.removeChild(canvas);
      gradient.minigl?.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    gradientColors,
    amp,
    freqX,
    freqY,
    speed,
    rotation,
    darkenTop,
    density,
    onInit,
  ]);

  return (
    <div
      ref={containerRef}
      style={{ width, height, position: "absolute", overflow: "hidden" }}
    />
  );
}
