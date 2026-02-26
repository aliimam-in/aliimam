
'use client';
import React from 'react';

export interface Geometric16ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric16Shapes = React.forwardRef<SVGSVGElement, Geometric16ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 357 357"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <circle cx="178.175" cy="41.5741" r="41.5741" fill="currentColor"/>
<circle cx="274.766" cy="274.766" r="15.4418" transform="rotate(135 274.766 274.766)" fill="currentColor"/>
<circle cx="178.175" cy="314.775" r="41.5741" fill="currentColor"/>
<circle cx="314.775" cy="178.175" r="41.5741" transform="rotate(90 314.775 178.175)" fill="currentColor"/>
<circle cx="41.5741" cy="178.175" r="41.5741" transform="rotate(90 41.5741 178.175)" fill="currentColor"/>
<circle cx="81.5836" cy="81.5835" r="15.4418" transform="rotate(135 81.5836 81.5835)" fill="currentColor"/>
<circle cx="15.4418" cy="15.4418" r="15.4418" transform="matrix(0.707107 0.707107 0.707107 -0.707107 59.7454 274.766)" fill="currentColor"/>
<circle cx="15.4418" cy="15.4418" r="15.4418" transform="matrix(0.707107 0.707107 0.707107 -0.707107 252.928 81.5835)" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M253.018 35.6837C258.826 38.7342 261.061 45.9153 258.011 51.7231L246.411 73.8066C243.361 79.6144 236.18 81.8496 230.372 78.7991C224.564 75.7485 222.329 68.5674 225.38 62.7596L236.979 40.6761C240.029 34.8683 247.211 32.6331 253.018 35.6837Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M125.977 277.55C131.785 280.601 134.02 287.782 130.97 293.59L119.37 315.673C116.32 321.481 109.139 323.716 103.331 320.666C97.5231 317.615 95.288 310.434 98.3385 304.626L109.938 282.543C112.988 276.735 120.17 274.5 125.977 277.55Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M103.331 35.6837C97.5232 38.7342 95.288 45.9153 98.3386 51.7231L109.938 73.8066C112.989 79.6144 120.17 81.8496 125.977 78.7991C131.785 75.7485 134.02 68.5674 130.97 62.7596L119.37 40.6761C116.32 34.8683 109.139 32.6331 103.331 35.6837Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M230.372 277.55C224.564 280.601 222.329 287.782 225.38 293.59L236.979 315.673C240.03 321.481 247.211 323.716 253.018 320.666C258.826 317.615 261.061 310.434 258.011 304.626L246.411 282.543C243.361 276.735 236.18 274.5 230.372 277.55Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M78.4295 126.687C75.4204 132.516 68.2554 134.803 62.426 131.794L40.2604 120.352C34.431 117.343 32.1447 110.178 35.1538 104.348C38.1629 98.5189 45.3279 96.2326 51.1573 99.2417L73.3229 110.683C79.1523 113.692 81.4386 120.857 78.4295 126.687Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M320.129 102.317C317.037 96.5312 309.84 94.3473 304.054 97.4392L282.054 109.196C276.268 112.288 274.084 119.484 277.176 125.27C280.268 131.056 287.465 133.24 293.25 130.148L315.251 118.392C321.037 115.3 323.221 108.103 320.129 102.317Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M78.4295 229.662C75.4204 223.833 68.2554 221.547 62.426 224.556L40.2604 235.997C34.431 239.006 32.1447 246.171 35.1538 252.001C38.1629 257.83 45.3279 260.116 51.1573 257.107L73.3229 245.666C79.1523 242.657 81.4386 235.492 78.4295 229.662Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M320.129 254.032C317.037 259.818 309.84 262.002 304.054 258.91L282.054 247.153C276.268 244.062 274.084 236.865 277.176 231.079C280.268 225.293 287.465 223.109 293.25 226.201L315.251 237.957C321.037 241.049 323.221 248.246 320.129 254.032Z" fill="currentColor"/>
    </svg>
  )
);

Geometric16Shapes.displayName = "Geometric16Shapes";

export const Geometric16ShapesMetadata = {
  id: "geometric16_shapes",
  baseId: "geometric16",
  variant: "shapes",
  name: "Geometric16",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric16Shapes;
