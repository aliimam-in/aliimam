/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SmartphoneChargingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SmartphoneCharging = React.forwardRef<SVGSVGElement, SmartphoneChargingProps>(
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
  <path d="M12.667 8 10 12h4l-2.667 4" />
    </svg>
  )
);
SmartphoneCharging.displayName = "SmartphoneCharging";
export const SmartphoneChargingMetadata = { 
  id: "smartphone-charging", 
  baseId: "smartphone-charging", 
  variant: "default", 
  name: "Smartphone Charging", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SmartphoneCharging;
