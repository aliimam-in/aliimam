/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryPlus = React.forwardRef<SVGSVGElement, BatteryPlusProps>(
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
      <path d="M10 9v6" />
  <path d="M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" />
  <path d="M22 14v-4" />
  <path d="M7 12h6" />
  <path d="M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" />
    </svg>
  )
);
BatteryPlus.displayName = "BatteryPlus";
export const BatteryPlusMetadata = { 
  id: "battery-plus", 
  baseId: "battery-plus", 
  variant: "default", 
  name: "Battery Plus", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryPlus;
