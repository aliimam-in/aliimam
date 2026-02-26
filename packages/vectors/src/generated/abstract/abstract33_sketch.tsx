
'use client';
import React from 'react';

export interface Abstract33SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract33Sketch = React.forwardRef<SVGSVGElement, Abstract33SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 446 446"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M106.376 149.985C88.3565 235.048 87.9507 249.414 83.6488 271.086C76.993 304.04 82.5125 313.943 93.3889 292.84C119.525 241.785 190.303 180.91 229.263 176.039C234.62 175.39 235.351 174.578 232.591 172.793C228.776 170.277 219.848 171.738 207.348 176.608C167.495 192.192 129.59 218.408 101.587 255.421C96.4733 262.239 96.4733 263.05 100.694 236.59C105.645 205.421 110.596 184.724 118.226 152.501C120.255 143.897 109.541 135.293 106.376 149.985ZM258.727 171.088C250.773 172.712 255.318 176.445 266.438 177.419C270.578 177.744 276.178 178.555 278.938 179.123C290.951 181.639 287.298 174.903 274.393 172.306C264.815 170.358 262.867 170.195 258.727 171.088ZM323.661 188.051C293.386 199.496 297.363 236.022 329.505 241.46C356.372 246.005 376.42 211.51 357.102 194.059C349.96 187.646 332.996 184.561 323.661 188.051ZM348.499 194.059C355.966 198.766 357.102 206.071 351.989 216.866C342.979 235.859 323.012 241.136 316.437 226.282C308.645 208.669 332.996 184.237 348.499 194.059Z" fill="currentColor"/>
    </svg>
  )
);

Abstract33Sketch.displayName = "Abstract33Sketch";

export const Abstract33SketchMetadata = {
  id: "abstract33_sketch",
  baseId: "abstract33",
  variant: "sketch",
  name: "Abstract33",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract33Sketch;
