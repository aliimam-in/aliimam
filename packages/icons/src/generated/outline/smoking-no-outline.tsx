/**
 * Auto-generated logo component: Smoking No Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SmokingNoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SmokingNoOutlineLogo = React.forwardRef<SVGSVGElement, SmokingNoOutlineLogoProps>(
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
      <path d="M8 13l0 4" />
  <path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
  <path d="M3 3l18 18" />
  <path d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" />
    </svg>
  )
);

SmokingNoOutlineLogo.displayName = "SmokingNoOutlineLogo";

export const SmokingNoOutlineLogoMetadata = {
  id: "smoking-no-outline",
  baseId: "smoking-no-outline",
  variant: "default",
  name: "Smoking No Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SmokingNoOutlineLogo;
