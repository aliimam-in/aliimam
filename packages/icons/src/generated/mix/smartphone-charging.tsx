/**
 * Auto-generated logo component: Smartphone Charging (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SmartphoneChargingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SmartphoneChargingLogo = React.forwardRef<SVGSVGElement, SmartphoneChargingLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
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

SmartphoneChargingLogo.displayName = "SmartphoneChargingLogo";

export const SmartphoneChargingLogoMetadata = {
  id: "smartphone-charging",
  baseId: "smartphone-charging",
  variant: "default",
  name: "Smartphone Charging",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SmartphoneChargingLogo;
