/**
 * Auto-generated logo component: Zoom Money Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomMoneyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomMoneyOutlineLogo = React.forwardRef<SVGSVGElement, ZoomMoneyOutlineLogoProps>(
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
      <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
  <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M10 13v1m0 -8v1" />
    </svg>
  )
);

ZoomMoneyOutlineLogo.displayName = "ZoomMoneyOutlineLogo";

export const ZoomMoneyOutlineLogoMetadata = {
  id: "zoom-money-outline",
  baseId: "zoom-money-outline",
  variant: "default",
  name: "Zoom Money Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomMoneyOutlineLogo;
