/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Crop75FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Crop75Filled = React.forwardRef<SVGSVGElement, Crop75FilledProps>(
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
      <path d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
Crop75Filled.displayName = "Crop75Filled";
export const Crop75FilledMetadata = { 
  id: "crop-7-5_filled", 
  baseId: "crop-7-5", 
  variant: "filled", 
  name: "Crop 7 5", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Crop75Filled;
