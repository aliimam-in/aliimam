/**
 * Auto-generated logo component: Cardboards Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CardboardsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CardboardsOutlineLogo = React.forwardRef<SVGSVGElement, CardboardsOutlineLogoProps>(
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
      <path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2" />
  <path d="M7 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M15 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

CardboardsOutlineLogo.displayName = "CardboardsOutlineLogo";

export const CardboardsOutlineLogoMetadata = {
  id: "cardboards-outline",
  baseId: "cardboards-outline",
  variant: "default",
  name: "Cardboards Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CardboardsOutlineLogo;
