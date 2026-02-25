/**
 * Auto-generated logo component: Zzz Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZzzOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZzzOutlineLogo = React.forwardRef<SVGSVGElement, ZzzOutlineLogoProps>(
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
  <path d="M14 4h6l-6 8h6" />
    </svg>
  )
);

ZzzOutlineLogo.displayName = "ZzzOutlineLogo";

export const ZzzOutlineLogoMetadata = {
  id: "zzz-outline",
  baseId: "zzz-outline",
  variant: "default",
  name: "Zzz Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZzzOutlineLogo;
