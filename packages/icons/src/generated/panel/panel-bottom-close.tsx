/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelBottomCloseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelBottomClose = React.forwardRef<SVGSVGElement, PanelBottomCloseProps>(
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
  <path d="M3 15h18" />
  <path d="m15 8-3 3-3-3" />
    </svg>
  )
);
PanelBottomClose.displayName = "PanelBottomClose";
export const PanelBottomCloseMetadata = { 
  id: "panel-bottom-close", 
  baseId: "panel-bottom-close", 
  variant: "default", 
  name: "Panel Bottom Close", 
  category: "panel", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PanelBottomClose;
