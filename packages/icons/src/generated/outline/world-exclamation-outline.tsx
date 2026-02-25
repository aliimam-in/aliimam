/**
 * Auto-generated logo component: World Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldExclamationOutlineLogo = React.forwardRef<SVGSVGElement, WorldExclamationOutlineLogoProps>(
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
      <path d="M20.986 12.51a9 9 0 1 0 -5.71 7.873" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h10.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a17 17 0 0 1 0 18" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

WorldExclamationOutlineLogo.displayName = "WorldExclamationOutlineLogo";

export const WorldExclamationOutlineLogoMetadata = {
  id: "world-exclamation-outline",
  baseId: "world-exclamation-outline",
  variant: "default",
  name: "World Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldExclamationOutlineLogo;
