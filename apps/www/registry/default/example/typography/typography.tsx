"use client";

import "@/src/styles/typography.css";
import Image from "next/image";

const Example = () => (
  <div className="size-full h-[600px] overflow-y-auto">
    <div className="typography">
      <h1>Designing the Future: Crafting Beautiful Digital Experiences</h1>

      <p>
        Modern design is more than just aesthetics — it’s about creating
        meaningful experiences. From color systems to motion, today’s design
        tools empower creators to express ideas with precision and elegance. In
        this article, we’ll explore how thoughtful design systems shape the
        modern web.
      </p>

      <h2>Introduction</h2>
      <p>
        With design tools like Figma, Framer, and Penpot, collaboration between
        designers and developers has never been smoother. A unified design
        language ensures brand consistency and speeds up product delivery.
      </p>

      <h3>Core Principles of Modern Design</h3>
      <ul>
        <li>Clarity over complexity</li>
        <li>Purpose-driven color and typography</li>
        <li>Accessibility and inclusivity by default</li>
      </ul>

      <h3>Essential Tools for Designers</h3>
      <ol>
        <li>Figma or Sketch for UI design</li>
        <li>Adobe Illustrator for vector graphics</li>
        <li>Framer or Webflow for prototyping</li>
      </ol>

      <h2>Design Workflow Checklist</h2>
      <ul>
        <li>
          <input checked disabled type="checkbox" />{" "}
          <p>Establish color and type scales</p>
        </li>
        <li>
          <input disabled type="checkbox" />{" "}
          <p>Create reusable design components</p>
        </li>
        <li>
          <input disabled type="checkbox" />{" "}
          <p>Test layouts for accessibility</p>
        </li>
      </ul>

      <h2>Sample Image</h2>
      <p>
        Here’s an example of a clean visual composition. Great design balances
        whitespace, contrast, and rhythm — ensuring every element feels
        intentional.
      </p>
      <center>
        <Image
          alt="Modern design layout"
          height={400}
          src="/placeholder.svg"
          unoptimized
          width={600}
        />
      </center>

      <h2>Code Example</h2>
      <pre>
        <code>{`/* Design token example */
:root {
  --color-primary: #6366f1;
  --radius-lg: 1rem;
  --font-display: "Inter", sans-serif;
}`}</code>
      </pre>

      <h2>Blockquote</h2>
      <blockquote>
        "Design creates culture. Culture shapes values. Values determine the
        future." — Robert L. Peters
      </blockquote>

      <h2>Design System Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>System</th>
            <th>Approach</th>
            <th>Used By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Material Design</td>
            <td>Component-Driven</td>
            <td>Google, Android</td>
          </tr>
          <tr>
            <td>Human Interface</td>
            <td>Guideline-Based</td>
            <td>Apple</td>
          </tr>
          <tr>
            <td>Fluent Design</td>
            <td>Motion & Depth</td>
            <td>Microsoft</td>
          </tr>
        </tbody>
      </table>

      <h2>Inline Elements</h2>
      <p>
        Use <strong>bold</strong> text for emphasis, <em>italics</em> for tone,{" "}
        <u>underlines</u> for clarity, and <a href="#">links</a> for action.
        Inline <code>tokens</code> and <mark>highlighted terms</mark> help guide
        focus in design documentation.
      </p>

      <h2>Definition List</h2>
      <dl>
        <dt>Design Token</dt>
        <dd>A single source of truth for UI styles like color or spacing.</dd>
        <dt>Component</dt>
        <dd>A reusable UI element with defined behavior and appearance.</dd>
        <dt>Prototype</dt>
        <dd>An interactive mockup used to test user flows and layouts.</dd>
      </dl>

      <h2>Details and Summary</h2>
      <details>
        <summary>Click to view design system tips</summary>
        <p>
          Start small — document buttons, colors, and typography first. Expand
          gradually into complex components.
        </p>
      </details>

      <h2>Superscript & Subscript</h2>
      <p>
        A perfect grid ratio like 8<sup>n</sup> ensures visual harmony, while
        baseline spacing of 4<sub>px</sub> keeps everything aligned.
      </p>

      <h2>Conclusion</h2>
      <p>
        Good design is invisible — it guides, informs, and delights without
        distraction. Whether you’re building a portfolio or a full design
        system, consistency and care are your best tools for lasting impact.
      </p>
    </div>
  </div>
);

export default Example;
