/**
 * Auto-generated logo component: Zzz Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZzzOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZzzOffOutlineLogo = React.forwardRef<SVGSVGElement, ZzzOffOutlineLogoProps>(
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
      <path d="M4 12h6l-6 8h6" />
  <path d="M14 4h6l-5.146 6.862m1.146 1.138h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ZzzOffOutlineLogo.displayName = "ZzzOffOutlineLogo";

export const ZzzOffOutlineLogoMetadata = {
  id: "zzz-off-outline",
  baseId: "zzz-off-outline",
  variant: "default",
  name: "Zzz Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZzzOffOutlineLogo;
