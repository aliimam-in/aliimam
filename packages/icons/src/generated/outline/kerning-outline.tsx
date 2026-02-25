/**
 * Auto-generated logo component: Kerning Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KerningOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KerningOutlineLogo = React.forwardRef<SVGSVGElement, KerningOutlineLogoProps>(
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
      <path d="M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5" />
  <path d="M3 9l3 6l3 -6" />
  <path d="M9 20l6 -16" />
    </svg>
  )
);

KerningOutlineLogo.displayName = "KerningOutlineLogo";

export const KerningOutlineLogoMetadata = {
  id: "kerning-outline",
  baseId: "kerning-outline",
  variant: "default",
  name: "Kerning Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KerningOutlineLogo;
