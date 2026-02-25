/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryVertical2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryVertical2Filled = React.forwardRef<SVGSVGElement, BatteryVertical2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M13.5 3a1.5 1.5 0 0 1 1.395 .948l.018 .052h.087a3 3 0 0 1 2.995 2.824l.005 .176v11a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-11a3 3 0 0 1 3 -3h.086l.019 -.052a1.5 1.5 0 0 1 1.25 -.941l.145 -.007zm.5 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m0 -3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2" />
    </svg>
  )
);
BatteryVertical2Filled.displayName = "BatteryVertical2Filled";
export const BatteryVertical2FilledMetadata = { 
  id: "battery-vertical-2_filled", 
  baseId: "battery-vertical-2", 
  variant: "filled", 
  name: "Battery Vertical 2", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryVertical2Filled;
