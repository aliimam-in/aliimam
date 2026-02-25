/**
 * Auto-generated logo component: Home Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeBoltOutlineLogo = React.forwardRef<SVGSVGElement, HomeBoltOutlineLogoProps>(
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
      <path d="M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815" />
  <path d="M19 14l-2 4h4l-2 4" />
    </svg>
  )
);

HomeBoltOutlineLogo.displayName = "HomeBoltOutlineLogo";

export const HomeBoltOutlineLogoMetadata = {
  id: "home-bolt-outline",
  baseId: "home-bolt-outline",
  variant: "default",
  name: "Home Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeBoltOutlineLogo;
