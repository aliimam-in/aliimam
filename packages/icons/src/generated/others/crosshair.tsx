/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CrosshairProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Crosshair = React.forwardRef<SVGSVGElement, CrosshairProps>(
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
      <circle cx="12" cy="12" r="10" />
  <line x1="22" x2="18" y1="12" y2="12" />
  <line x1="6" x2="2" y1="12" y2="12" />
  <line x1="12" x2="12" y1="6" y2="2" />
  <line x1="12" x2="12" y1="22" y2="18" />
    </svg>
  )
);
Crosshair.displayName = "Crosshair";
export const CrosshairMetadata = { 
  id: "crosshair", 
  baseId: "crosshair", 
  variant: "default", 
  name: "Crosshair", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Crosshair;
