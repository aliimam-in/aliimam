/**
 * Auto-generated logo component: Wifi 0 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Wifi0OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Wifi0OutlineLogo = React.forwardRef<SVGSVGElement, Wifi0OutlineLogoProps>(
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
    </svg>
  )
);

Wifi0OutlineLogo.displayName = "Wifi0OutlineLogo";

export const Wifi0OutlineLogoMetadata = {
  id: "wifi-0-outline",
  baseId: "wifi-0-outline",
  variant: "default",
  name: "Wifi 0 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Wifi0OutlineLogo;
