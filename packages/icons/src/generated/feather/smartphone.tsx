/**
 * Auto-generated logo component: Smartphone (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SmartphoneLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SmartphoneLogo = React.forwardRef<SVGSVGElement, SmartphoneLogoProps>(
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
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )
);

SmartphoneLogo.displayName = "SmartphoneLogo";

export const SmartphoneLogoMetadata = {
  id: "smartphone",
  baseId: "smartphone",
  variant: "default",
  name: "Smartphone",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SmartphoneLogo;
