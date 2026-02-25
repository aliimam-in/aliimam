/**
 * Auto-generated logo component: Bong Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BongOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BongOutlineLogo = React.forwardRef<SVGSVGElement, BongOutlineLogoProps>(
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
      <path d="M13 3v8.416c.134 .059 .265 .123 .393 .193l3.607 -3.609l2 2l-3.608 3.608a5 5 0 1 1 -6.392 -2.192v-8.416h4" />
  <path d="M8 3h6" />
  <path d="M6.1 17h9.8" />
    </svg>
  )
);

BongOutlineLogo.displayName = "BongOutlineLogo";

export const BongOutlineLogoMetadata = {
  id: "bong-outline",
  baseId: "bong-outline",
  variant: "default",
  name: "Bong Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BongOutlineLogo;
