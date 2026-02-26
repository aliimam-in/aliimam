/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TabletsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tablets = React.forwardRef<SVGSVGElement, TabletsProps>(
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
      <circle cx="7" cy="7" r="5" />
  <circle cx="17" cy="17" r="5" />
  <path d="M12 17h10" />
  <path d="m3.46 10.54 7.08-7.08" />
    </svg>
  )
);
Tablets.displayName = "Tablets";
export const TabletsMetadata = { 
  id: "tablets", 
  baseId: "tablets", 
  variant: "default", 
  name: "Tablets", 
  category: "health", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tablets;
