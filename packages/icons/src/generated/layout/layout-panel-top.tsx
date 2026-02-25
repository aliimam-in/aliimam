/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutPanelTopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutPanelTop = React.forwardRef<SVGSVGElement, LayoutPanelTopProps>(
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
      <rect width="18" height="7" x="3" y="3" rx="1" />
  <rect width="7" height="7" x="3" y="14" rx="1" />
  <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  )
);
LayoutPanelTop.displayName = "LayoutPanelTop";
export const LayoutPanelTopMetadata = { 
  id: "layout-panel-top", 
  baseId: "layout-panel-top", 
  variant: "default", 
  name: "Layout Panel Top", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutPanelTop;
