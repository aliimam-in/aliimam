/**
 * Auto-generated logo component: World X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldXOutlineLogo = React.forwardRef<SVGSVGElement, WorldXOutlineLogoProps>(
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
      <path d="M20.929 13.131a9 9 0 1 0 -8.931 7.869" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h9.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.992 16.992 0 0 1 2.505 10.573" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

WorldXOutlineLogo.displayName = "WorldXOutlineLogo";

export const WorldXOutlineLogoMetadata = {
  id: "world-x-outline",
  baseId: "world-x-outline",
  variant: "default",
  name: "World X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldXOutlineLogo;
