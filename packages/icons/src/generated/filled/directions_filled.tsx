/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectionsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectionsFilled = React.forwardRef<SVGSVGElement, DirectionsFilledProps>(
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
      <path d="M10 22a1 1 0 0 1 0 -2h1v-2.001l-5 .001a1 1 0 0 1 -.707 -.293l-2 -2a1 1 0 0 1 0 -1.414l2 -2a1 1 0 0 1 .707 -.293l5 -.001v-1.999h-3a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h3v-1a1 1 0 0 1 2 0v1h6a1 1 0 0 1 .707 .293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1 -.707 .293h-6v1.999l1 .001a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1l-1 -.001v2.001h1a1 1 0 0 1 0 2z" />
    </svg>
  )
);
DirectionsFilled.displayName = "DirectionsFilled";
export const DirectionsFilledMetadata = { 
  id: "directions_filled", 
  baseId: "directions", 
  variant: "filled", 
  name: "Directions", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectionsFilled;
