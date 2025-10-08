"use client";

import "@/src/styles/typography.css";
import { Roboto } from "next/font/google";
import Image from "next/image";

const myFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Example = () => (
  <div className={`${myFont.className} size-full h-[600px] overflow-y-auto`}>
    <div className="typography">
      <h1>Diseñando el futuro: Creando experiencias digitales hermosas</h1>

      <p>
        El diseño moderno es mucho más que estética: se trata de crear experiencias
        significativas. Desde los sistemas de color hasta el movimiento, las
        herramientas de diseño actuales permiten a los creadores expresar ideas
        con precisión y elegancia. En este artículo, exploraremos cómo los sistemas
        de diseño bien pensados dan forma a la web moderna.
      </p>

      <h2>Introducción</h2>
      <p>
        Con herramientas de diseño como Figma, Framer y Penpot, la colaboración
        entre diseñadores y desarrolladores nunca ha sido tan fluida. Un lenguaje
        de diseño unificado garantiza la coherencia de la marca y acelera la
        entrega de productos.
      </p>

      <h3>Principios fundamentales del diseño moderno</h3>
      <ul>
        <li>Claridad sobre complejidad</li>
        <li>Color y tipografía con propósito</li>
        <li>Accesibilidad e inclusión por defecto</li>
      </ul>

      <h3>Herramientas esenciales para diseñadores</h3>
      <ol>
        <li>Figma o Sketch para diseño de interfaces</li>
        <li>Adobe Illustrator para gráficos vectoriales</li>
        <li>Framer o Webflow para prototipado</li>
      </ol>

      <h2>Lista de verificación del flujo de trabajo de diseño</h2>
      <ul>
        <li>
          <input checked disabled type="checkbox" />{" "}
          <p>Establecer escalas de color y tipografía</p>
        </li>
        <li>
          <input disabled type="checkbox" />{" "}
          <p>Crear componentes de diseño reutilizables</p>
        </li>
        <li>
          <input disabled type="checkbox" />{" "}
          <p>Probar los diseños para asegurar accesibilidad</p>
        </li>
      </ul>

      <h2>Imagen de muestra</h2>
      <p>
        Aquí tienes un ejemplo de una composición visual limpia. Un buen diseño
        equilibra el espacio en blanco, el contraste y el ritmo, asegurando que
        cada elemento parezca intencional.
      </p>
      <center>
        <Image
          alt="Diseño moderno"
          height={400}
          src="/placeholder.svg"
          unoptimized
          width={600}
        />
      </center>

      <h2>Ejemplo de código</h2>
      <pre>
        <code>{`/* Ejemplo de token de diseño */
:root {
  --color-primary: #6366f1;
  --radius-lg: 1rem;
  --font-display: "Inter", sans-serif;
}`}</code>
      </pre>

      <h2>Cita</h2>
      <blockquote>
        "El diseño crea cultura. La cultura da forma a los valores. Los valores
        determinan el futuro." — Robert L. Peters
      </blockquote>

      <h2>Comparación de sistemas de diseño</h2>
      <table>
        <thead>
          <tr>
            <th>Sistema</th>
            <th>Enfoque</th>
            <th>Usado por</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Material Design</td>
            <td>Basado en componentes</td>
            <td>Google, Android</td>
          </tr>
          <tr>
            <td>Human Interface</td>
            <td>Basado en guías</td>
            <td>Apple</td>
          </tr>
          <tr>
            <td>Fluent Design</td>
            <td>Movimiento y profundidad</td>
            <td>Microsoft</td>
          </tr>
        </tbody>
      </table>

      <h2>Elementos en línea</h2>
      <p>
        Usa texto en <strong>negrita</strong> para énfasis, <em>cursiva</em> para
        tono, <u>subrayado</u> para claridad y <a href="#">enlaces</a> para acción.
        Los <code>tokens</code> en línea y los <mark>términos resaltados</mark> ayudan
        a guiar la atención en la documentación de diseño.
      </p>

      <h2>Lista de definiciones</h2>
      <dl>
        <dt>Token de diseño</dt>
        <dd>
          Fuente única de verdad para estilos de interfaz de usuario como color o
          espaciado.
        </dd>
        <dt>Componente</dt>
        <dd>
          Elemento de interfaz reutilizable con comportamiento y apariencia definidos.
        </dd>
        <dt>Prototipo</dt>
        <dd>
          Maqueta interactiva utilizada para probar flujos y estructuras de diseño.
        </dd>
      </dl>

      <h2>Detalles y resumen</h2>
      <details>
        <summary>Haz clic para ver consejos sobre sistemas de diseño</summary>
        <p>
          Empieza con lo básico: documenta botones, colores y tipografía primero.
          Luego amplía gradualmente a componentes más complejos.
        </p>
      </details>

      <h2>Superíndice y subíndice</h2>
      <p>
        Una proporción de cuadrícula perfecta como 8<sup>n</sup> garantiza armonía
        visual, mientras que un espaciado base de 4<sub>px</sub> mantiene todo
        alineado.
      </p>

      <h2>Conclusión</h2>
      <p>
        Un buen diseño es invisible: guía, informa y deleita sin distraer. Ya sea que
        estés construyendo un portafolio o un sistema de diseño completo, la
        consistencia y el cuidado son tus mejores herramientas para lograr un impacto
        duradero.
      </p>
    </div>
  </div>
);

export default Example;
