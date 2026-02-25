/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelLeft = React.forwardRef<SVGSVGElement, PanelLeftProps>(
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
  <path d="M9 3v18" />
    </svg>
  )
);
PanelLeft.displayName = "PanelLeft";
export const PanelLeftMetadata = { 
  id: "panel-left", 
  baseId: "panel-left", 
  variant: "default", 
  name: "Panel Left", 
  category: "panel", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PanelLeft;
