/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelLeftDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelLeftDashed = React.forwardRef<SVGSVGElement, PanelLeftDashedProps>(
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
  <path d="M9 14v1" />
  <path d="M9 19v2" />
  <path d="M9 3v2" />
  <path d="M9 9v1" />
    </svg>
  )
);
PanelLeftDashed.displayName = "PanelLeftDashed";
export const PanelLeftDashedMetadata = { 
  id: "panel-left-dashed", 
  baseId: "panel-left-dashed", 
  variant: "default", 
  name: "Panel Left Dashed", 
  category: "panel", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PanelLeftDashed;
