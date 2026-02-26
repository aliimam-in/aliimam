
'use client';
import React from 'react';

export interface Abstract5SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract5Sketch = React.forwardRef<SVGSVGElement, Abstract5SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 446 446"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M204.394 103.754C149.695 115.118 78.2858 191.985 105.802 270.413C132.984 347.949 245.278 372.903 308.666 301.94C338.634 268.296 349.662 237.326 345.429 197.89C341.641 162.352 300.979 113.781 275.023 113.781C268.116 113.781 271.903 118.126 284.492 124.587C366.15 166.586 338.856 280.883 260.095 320.209C171.641 364.435 92.0994 294.587 116.163 205.131C131.982 146.31 185.678 95.9564 258.312 111.998C266.445 113.781 267.447 110.55 261.32 106.985C251.071 100.97 223.778 99.6323 204.394 103.754ZM207.513 180.511C155.376 198.335 169.19 274.757 224.446 274.757C271.458 274.757 289.171 207.47 247.618 186.304C235.141 179.954 231.13 184.856 242.048 193.099C270.232 214.377 259.092 258.381 223.666 265.4C200.717 269.967 182.336 238.886 193.699 214.712C199.826 201.677 214.754 188.866 227.008 186.081C233.692 184.521 234.027 183.185 228.345 180.288C223.443 177.726 214.977 177.837 207.513 180.511Z" />
    </svg>
  )
);

Abstract5Sketch.displayName = "Abstract5Sketch";

export const Abstract5SketchMetadata = {
  id: "abstract5_sketch",
  baseId: "abstract5",
  variant: "sketch",
  name: "Abstract5",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract5Sketch;
