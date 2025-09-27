import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ai: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Ai(
    {
      color = "currentColor",
      fill,
      size,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 425 425"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <g filter="url(#a)">
          <mask
            id="b"
            style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="100"
            y="100"
            width={size}
            height={size}
          >
            <path
              d="M100 219.795C100 194.1 120.819 173.283 146.516 173.283H152.386L168.813 130.001C175.655 111.95 192.948 100.021 212.247 100H212.31C231.588 100 248.86 111.887 255.764 129.896L272.361 173.283H278.484C304.181 173.283 325 194.1 325 219.795C325 235.714 316.997 249.754 304.814 258.136L306.229 261.851C315.414 285.836 303.399 312.733 279.392 321.918C255.405 331.081 228.505 319.088 219.32 295.083L212.458 277.158L205.701 294.977C198.649 313.557 180.975 325 162.204 325C156.715 325 151.14 324.029 145.714 321.96C121.706 312.839 109.607 285.983 118.729 261.957L120.186 258.136C108.003 249.754 100 235.714 100 219.795Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#b)">
            <mask
              id="c"
              style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="89"
              y="89"
              width={size}
              height={size}
            >
              <path
                d="M89.4425 89.4436H335.557V335.535H89.4425V89.4436Z"
                fill="#fff"
              />
            </mask>
            <g mask="url(#c)">
              <path
                d="M335.832 88.9369H88.5345V336.211H335.832V88.9369Z"
                fill="url(#d)"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="a"
            x="0"
            y="0"
            width={size}
            height={size}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity="0" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" result="effect1_innerShadow_2007_86" />
            <feGaussianBlur
              stdDeviation="50"
              result="effect2_foregroundBlur_2007_86"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="5 5"
              numOctaves="3"
              seed="5803"
              result="displacementX"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="5 5"
              numOctaves="3"
              seed="5804"
              result="displacementY"
            />
            <feColorMatrix
              in="displacementX"
              values="0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1"
              result="displacementXRed"
            />
            <feColorMatrix
              in="displacementY"
              values="0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 1"
            />
            <feComposite
              in="displacementXRed"
              operator="arithmetic"
              k2="1"
              k3="1"
            />
            <feDisplacementMap
              in="effect2_foregroundBlur_2007_86"
              scale="200"
              xChannelSelector="R"
              yChannelSelector="G"
              width="100%"
              height="100%"
            />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feComponentTransfer result="sourceDisplacedAlpha">
              <feFuncA type="gamma" exponent=".2" />
            </feComponentTransfer>
            <feColorMatrix
              in="effect2_foregroundBlur_2007_86"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feComponentTransfer result="inputSourceAlpha">
              <feFuncA type="gamma" exponent=".2" />
            </feComponentTransfer>
            <feComposite
              in="sourceDisplacedAlpha"
              operator="arithmetic"
              k1="1"
              result="displacementAlphasMultiplied"
            />
            <feComposite
              in="displacementAlphasMultiplied"
              operator="arithmetic"
              k3="-.5"
              k4=".5"
              result="centeringAdjustment"
            />
            <feComposite
              in="displacementX"
              in2="displacementAlphasMultiplied"
              operator="arithmetic"
              k1="1"
            />
            <feComposite
              in="centeringAdjustment"
              operator="arithmetic"
              k2="1"
              k3="1"
            />
            <feColorMatrix
              values="0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1"
              result="displacementXFinal"
            />
            <feComposite
              in="displacementY"
              in2="displacementAlphasMultiplied"
              operator="arithmetic"
              k1="1"
            />
            <feComposite
              in="centeringAdjustment"
              operator="arithmetic"
              k2="1"
              k3="1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 1"
              result="displacementYFinal"
            />
            <feComposite
              in="displacementXFinal"
              in2="displacementYFinal"
              operator="arithmetic"
              k2="1"
              k3="1"
            />
            <feComposite
              in2="displacementAlphasMultiplied"
              operator="in"
              result="displacementMap"
            />
            <feFlood floodColor="#7f7f7f" floodOpacity="1" />
            <feComposite in2="displacementAlphasMultiplied" operator="out" />
            <feComposite in2="displacementMap" result="displacementMapWithBg" />
            <feDisplacementMap
              in="effect2_foregroundBlur_2007_86"
              scale="200"
              xChannelSelector="R"
              yChannelSelector="G"
              width="100%"
              height="100%"
              result="displacedImage"
            />
            <feColorMatrix
              in="effect2_foregroundBlur_2007_86"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 127 0"
              result="imageOpaque"
            />
            <feDisplacementMap
              in="imageOpaque"
              in2="displacementMapWithBg"
              scale="200"
              xChannelSelector="R"
              yChannelSelector="G"
              width="100%"
              height="100%"
              result="displacedImageOpaque"
            />
            <feColorMatrix
              in="displacedImage"
              values="0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="displacedImageRed"
            />
            <feColorMatrix
              in="effect2_foregroundBlur_2007_86"
              values="0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feComposite
              in="displacedImageRed"
              operator="atop"
              result="transparencyRedMap"
            />
            <feColorMatrix
              in="transparencyRedMap"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0"
              result="transparencyAlphaMap"
            />
            <feComposite in="displacedImageOpaque" in2="imageOpaque" />
            <feComposite
              in2="transparencyAlphaMap"
              operator="in"
              result="effect3_texture_2007_86"
            />
          </filter>
          <pattern
            id="d"
            patternContentUnits="objectBoundingBox"
            width={size}
            height={size}
          >
            <use xlink:href="#e" transform="scale(.00412 .0041)" />
          </pattern>
        </defs>
      </svg>
    );
  },
);

Ai.displayName = "Ai";

Ai.metadata = {
  name: "Ai",
  category: "icon/ali",
  tags: ["ai", "icon"],
  description: "Ai icon from icon/ali category",
  type: ["stroke", "solid"],
} as IconMetadata;

export default Ai;
