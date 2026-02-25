/**
 * Auto-generated logo component: World Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldMinusOutlineLogo = React.forwardRef<SVGSVGElement, WorldMinusOutlineLogoProps>(
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
      <path d="M20.483 15.006a9 9 0 1 0 -7.958 5.978" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h16.8" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.94 16.94 0 0 1 2.307 12" />
  <path d="M16 19h6" />
    </svg>
  )
);

WorldMinusOutlineLogo.displayName = "WorldMinusOutlineLogo";

export const WorldMinusOutlineLogoMetadata = {
  id: "world-minus-outline",
  baseId: "world-minus-outline",
  variant: "default",
  name: "World Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldMinusOutlineLogo;
