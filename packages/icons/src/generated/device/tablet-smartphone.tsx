/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TabletSmartphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TabletSmartphone = React.forwardRef<SVGSVGElement, TabletSmartphoneProps>(
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
      <rect width="10" height="14" x="3" y="8" rx="2" />
  <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
  <path d="M8 18h.01" />
    </svg>
  )
);
TabletSmartphone.displayName = "TabletSmartphone";
export const TabletSmartphoneMetadata = { 
  id: "tablet-smartphone", 
  baseId: "tablet-smartphone", 
  variant: "default", 
  name: "Tablet Smartphone", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TabletSmartphone;
