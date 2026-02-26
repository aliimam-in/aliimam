/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryWarningProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryWarning = React.forwardRef<SVGSVGElement, BatteryWarningProps>(
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
      <path d="M10 17h.01" />
  <path d="M10 7v6" />
  <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
  <path d="M22 14v-4" />
  <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
    </svg>
  )
);
BatteryWarning.displayName = "BatteryWarning";
export const BatteryWarningMetadata = { 
  id: "battery-warning", 
  baseId: "battery-warning", 
  variant: "default", 
  name: "Battery Warning", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryWarning;
