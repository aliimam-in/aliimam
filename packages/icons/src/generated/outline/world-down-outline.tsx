/**
 * Auto-generated logo component: World Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldDownOutlineLogo = React.forwardRef<SVGSVGElement, WorldDownOutlineLogoProps>(
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
      <path d="M20.986 12.509a9 9 0 1 0 -8.455 8.476" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h10.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3c2.313 3.706 3.07 7.857 2.27 12" />
  <path d="M19 16v6" />
  <path d="M22 19l-3 3l-3 -3" />
    </svg>
  )
);

WorldDownOutlineLogo.displayName = "WorldDownOutlineLogo";

export const WorldDownOutlineLogoMetadata = {
  id: "world-down-outline",
  baseId: "world-down-outline",
  variant: "default",
  name: "World Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldDownOutlineLogo;
