/**
 * Auto-generated logo component: Badge Tm Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeTmOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeTmOutlineLogo = React.forwardRef<SVGSVGElement, BadgeTmOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M6 9h4" />
  <path d="M8 9v6" />
  <path d="M13 15v-6l2 3l2 -3v6" />
    </svg>
  )
);

BadgeTmOutlineLogo.displayName = "BadgeTmOutlineLogo";

export const BadgeTmOutlineLogoMetadata = {
  id: "badge-tm-outline",
  baseId: "badge-tm-outline",
  variant: "default",
  name: "Badge Tm Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeTmOutlineLogo;
