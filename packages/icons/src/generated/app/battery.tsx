/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Battery = React.forwardRef<SVGSVGElement, BatteryProps>(
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
      <path d="M 22 14 L 22 10" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  )
);
Battery.displayName = "Battery";
export const BatteryMetadata = { 
  id: "battery", 
  baseId: "battery", 
  variant: "default", 
  name: "Battery", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Battery;
