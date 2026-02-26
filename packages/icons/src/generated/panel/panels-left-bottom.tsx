/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelsLeftBottomProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelsLeftBottom = React.forwardRef<SVGSVGElement, PanelsLeftBottomProps>(
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
  <path d="M9 15h12" />
    </svg>
  )
);
PanelsLeftBottom.displayName = "PanelsLeftBottom";
export const PanelsLeftBottomMetadata = { 
  id: "panels-left-bottom", 
  baseId: "panels-left-bottom", 
  variant: "default", 
  name: "Panels Left Bottom", 
  category: "panel", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PanelsLeftBottom;
