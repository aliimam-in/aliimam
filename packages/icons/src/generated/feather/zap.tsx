/**
 * Auto-generated logo component: Zap (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZapLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZapLogo = React.forwardRef<SVGSVGElement, ZapLogoProps>(
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
);

ZapLogo.displayName = "ZapLogo";

export const ZapLogoMetadata = {
  id: "zap",
  baseId: "zap",
  variant: "default",
  name: "Zap",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZapLogo;
