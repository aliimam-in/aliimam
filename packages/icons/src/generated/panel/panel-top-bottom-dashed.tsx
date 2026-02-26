/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelTopBottomDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelTopBottomDashed = React.forwardRef<SVGSVGElement, PanelTopBottomDashedProps>(
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
      <path d="M14 15h1" />
  <path d="M14 9h1" />
  <path d="M19 15h2" />
  <path d="M19 9h2" />
  <path d="M3 15h2" />
  <path d="M3 9h2" />
  <path d="M9 15h1" />
  <path d="M9 9h1" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);
PanelTopBottomDashed.displayName = "PanelTopBottomDashed";
export const PanelTopBottomDashedMetadata = { 
  id: "panel-top-bottom-dashed", 
  baseId: "panel-top-bottom-dashed", 
  variant: "default", 
  name: "Panel Top Bottom Dashed", 
  category: "panel", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PanelTopBottomDashed;
