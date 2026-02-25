/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PanelRightCloseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PanelRightClose = React.forwardRef<SVGSVGElement, PanelRightCloseProps>(
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
  <path d="M15 3v18" />
  <path d="m8 9 3 3-3 3" />
    </svg>
  )
);
PanelRightClose.displayName = "PanelRightClose";
export const PanelRightCloseMetadata = { 
  id: "panel-right-close", 
  baseId: "panel-right-close", 
  variant: "default", 
  name: "Panel Right Close", 
  category: "panel", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PanelRightClose;
