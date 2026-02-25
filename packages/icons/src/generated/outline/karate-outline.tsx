/**
 * Auto-generated logo component: Karate Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KarateOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const KarateOutlineLogo = React.forwardRef<SVGSVGElement, KarateOutlineLogoProps>(
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
      <path d="M17 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 9l4.5 1l3 2.5" />
  <path d="M13 21v-8l3 -5.5" />
  <path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
    </svg>
  )
);

KarateOutlineLogo.displayName = "KarateOutlineLogo";

export const KarateOutlineLogoMetadata = {
  id: "karate-outline",
  baseId: "karate-outline",
  variant: "default",
  name: "Karate Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default KarateOutlineLogo;
