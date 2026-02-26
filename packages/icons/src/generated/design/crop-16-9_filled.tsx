/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Crop169FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Crop169Filled = React.forwardRef<SVGSVGElement, Crop169FilledProps>(
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
      <path d="M18 7a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-4a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
Crop169Filled.displayName = "Crop169Filled";
export const Crop169FilledMetadata = { 
  id: "crop-16-9_filled", 
  baseId: "crop-16-9", 
  variant: "filled", 
  name: "Crop 16 9", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Crop169Filled;
