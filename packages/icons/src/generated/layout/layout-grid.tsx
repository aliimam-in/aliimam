/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutGridProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutGrid = React.forwardRef<SVGSVGElement, LayoutGridProps>(
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
  <rect width="7" height="7" x="14" y="3" rx="1" />
  <rect width="7" height="7" x="14" y="14" rx="1" />
  <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
);
LayoutGrid.displayName = "LayoutGrid";
export const LayoutGridMetadata = { 
  id: "layout-grid", 
  baseId: "layout-grid", 
  variant: "default", 
  name: "Layout Grid", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutGrid;
