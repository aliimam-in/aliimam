/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelTopCloseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelTopClose = React.forwardRef<SVGSVGElement, PanelTopCloseProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="m9 16 3-3 3 3" />
    </svg>
  )
);
PanelTopClose.displayName = "PanelTopClose";
export const PanelTopCloseMetadata = { 
  id: "panel-top-close", 
  baseId: "panel-top-close", 
  variant: "default", 
  name: "Panel Top Close", 
  category: "panel", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PanelTopClose;
