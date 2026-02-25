/**
 * Auto-generated logo component: Home Move Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeMoveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeMoveOutlineLogo = React.forwardRef<SVGSVGElement, HomeMoveOutlineLogoProps>(
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
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
  <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
  <path d="M16 19h6" />
  <path d="M19 16l3 3l-3 3" />
    </svg>
  )
);

HomeMoveOutlineLogo.displayName = "HomeMoveOutlineLogo";

export const HomeMoveOutlineLogoMetadata = {
  id: "home-move-outline",
  baseId: "home-move-outline",
  variant: "default",
  name: "Home Move Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeMoveOutlineLogo;
