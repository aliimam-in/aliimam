/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleCaretDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleCaretDownFilled = React.forwardRef<SVGSVGElement, CircleCaretDownFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-2 6.66h-6a1 1 0 0 0 -.708 1.707l3 3a1 1 0 0 0 1.415 0l3 -3a1 1 0 0 0 0 -1.414l-.094 -.083a1 1 0 0 0 -.613 -.21" />
    </svg>
  )
);
CircleCaretDownFilled.displayName = "CircleCaretDownFilled";
export const CircleCaretDownFilledMetadata = { 
  id: "circle-caret-down_filled", 
  baseId: "circle-caret-down", 
  variant: "filled", 
  name: "Circle Caret Down", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleCaretDownFilled;
