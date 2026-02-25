/**
 * Auto-generated logo component: Wiper Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WiperOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WiperOutlineLogo = React.forwardRef<SVGSVGElement, WiperOutlineLogoProps>(
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
      <path d="M11 18a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 9l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
  <path d="M12 18l-2.2 -12.8" />
    </svg>
  )
);

WiperOutlineLogo.displayName = "WiperOutlineLogo";

export const WiperOutlineLogoMetadata = {
  id: "wiper-outline",
  baseId: "wiper-outline",
  variant: "default",
  name: "Wiper Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WiperOutlineLogo;
