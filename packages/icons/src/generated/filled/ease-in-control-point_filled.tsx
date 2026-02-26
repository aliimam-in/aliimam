/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EaseInControlPointFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EaseInControlPointFilled = React.forwardRef<SVGSVGElement, EaseInControlPointFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M19 16a3 3 0 1 1 -2.829 4h-1.171a1 1 0 0 1 0 -2h1.17a3 3 0 0 1 2.83 -2m2.53 -13.848a1 1 0 0 1 .318 1.378l-.286 .445l-.173 .264a73 73 0 0 1 -1.26 1.839a70 70 0 0 1 -4.376 5.58c-2.795 3.195 -5.544 5.638 -8.171 7.04c-1.593 .848 -3.123 1.302 -4.582 1.302a1 1 0 0 1 0 -2c1.097 0 2.317 -.361 3.64 -1.068c2.373 -1.265 4.958 -3.562 7.607 -6.59a68 68 0 0 0 4.25 -5.42a69 69 0 0 0 1.003 -1.456l.455 -.69q .133 -.204 .196 -.306a1 1 0 0 1 1.378 -.318m-9.529 15.848a1 1 0 0 1 0 2h-2a1 1 0 0 1 0 -2z" />
    </svg>
  )
);
EaseInControlPointFilled.displayName = "EaseInControlPointFilled";
export const EaseInControlPointFilledMetadata = { 
  id: "ease-in-control-point_filled", 
  baseId: "ease-in-control-point", 
  variant: "filled", 
  name: "Ease In Control Point", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EaseInControlPointFilled;
