/**
 * Auto-generated logo component: Zap Off (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZapOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZapOffLogo = React.forwardRef<SVGSVGElement, ZapOffLogoProps>(
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
      <polyline points="12.41 6.75 13 2 10.57 4.92"/><polyline points="18.57 12.91 21 10 15.66 10"/><polyline points="8 8 3 14 12 14 11 22 16 16"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
);

ZapOffLogo.displayName = "ZapOffLogo";

export const ZapOffLogoMetadata = {
  id: "zap-off",
  baseId: "zap-off",
  variant: "default",
  name: "Zap Off",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZapOffLogo;
