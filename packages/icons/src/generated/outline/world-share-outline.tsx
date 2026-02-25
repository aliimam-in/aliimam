/**
 * Auto-generated logo component: World Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldShareOutlineLogo = React.forwardRef<SVGSVGElement, WorldShareOutlineLogoProps>(
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
      <path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h9.4" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

WorldShareOutlineLogo.displayName = "WorldShareOutlineLogo";

export const WorldShareOutlineLogoMetadata = {
  id: "world-share-outline",
  baseId: "world-share-outline",
  variant: "default",
  name: "World Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldShareOutlineLogo;
