/**
 * Auto-generated logo component: Wifi 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Wifi1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Wifi1OutlineLogo = React.forwardRef<SVGSVGElement, Wifi1OutlineLogoProps>(
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
      <path d="M12 18l.01 0" />
  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
    </svg>
  )
);

Wifi1OutlineLogo.displayName = "Wifi1OutlineLogo";

export const Wifi1OutlineLogoMetadata = {
  id: "wifi-1-outline",
  baseId: "wifi-1-outline",
  variant: "default",
  name: "Wifi 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Wifi1OutlineLogo;
