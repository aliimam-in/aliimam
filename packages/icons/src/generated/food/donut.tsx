/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DonutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Donut = React.forwardRef<SVGSVGElement, DonutProps>(
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
      <path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" />
  <circle cx="12" cy="12" r="3" />
    </svg>
  )
);
Donut.displayName = "Donut";
export const DonutMetadata = { 
  id: "donut", 
  baseId: "donut", 
  variant: "default", 
  name: "Donut", 
  category: "food", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Donut;
