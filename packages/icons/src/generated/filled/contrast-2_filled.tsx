/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Contrast2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Contrast2Filled = React.forwardRef<SVGSVGElement, Contrast2FilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm0 2h-14a1 1 0 0 0 -1 1v14a1 1 0 0 0 .769 .973c3.499 -.347 7.082 -4.127 7.226 -7.747l.005 -.226c0 -3.687 3.66 -7.619 7.232 -7.974a1 1 0 0 0 -.232 -.026" />
    </svg>
  )
);
Contrast2Filled.displayName = "Contrast2Filled";
export const Contrast2FilledMetadata = { 
  id: "contrast-2_filled", 
  baseId: "contrast-2", 
  variant: "filled", 
  name: "Contrast 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Contrast2Filled;
