/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BatteryVerticalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BatteryVerticalFilled = React.forwardRef<SVGSVGElement, BatteryVerticalFilledProps>(
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
      <path d="M13.5 3a1.5 1.5 0 0 1 1.395 .948l.018 .052h.087a3 3 0 0 1 2.995 2.824l.005 .176v11a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-11a3 3 0 0 1 3 -3h.086l.019 -.052a1.5 1.5 0 0 1 1.25 -.941l.145 -.007z" />
    </svg>
  )
);
BatteryVerticalFilled.displayName = "BatteryVerticalFilled";
export const BatteryVerticalFilledMetadata = { 
  id: "battery-vertical_filled", 
  baseId: "battery-vertical", 
  variant: "filled", 
  name: "Battery Vertical", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BatteryVerticalFilled;
