/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DessertProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dessert = React.forwardRef<SVGSVGElement, DessertProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" />
  <path d="M20.804 14.869a9 9 0 0 1-17.608 0" />
  <circle cx="12" cy="4" r="2" />
    </svg>
  )
);
Dessert.displayName = "Dessert";
export const DessertMetadata = { 
  id: "dessert", 
  baseId: "dessert", 
  variant: "default", 
  name: "Dessert", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dessert;
