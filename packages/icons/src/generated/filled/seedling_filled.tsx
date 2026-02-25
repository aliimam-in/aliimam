/**
 * Auto-generated logo component: Seedling (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SeedlingFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SeedlingFilledLogo = React.forwardRef<SVGSVGElement, SeedlingFilledLogoProps>(
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
      <path d="M6 3a7 7 0 0 1 6.95 6.155a6.97 6.97 0 0 1 5.05 -2.155h3a1 1 0 0 1 1 1v1a7 7 0 0 1 -7 7h-2v4a1 1 0 0 1 -2 0v-7h-2a7 7 0 0 1 -7 -7v-2a1 1 0 0 1 1 -1z" />
    </svg>
  )
);

SeedlingFilledLogo.displayName = "SeedlingFilledLogo";

export const SeedlingFilledLogoMetadata = {
  id: "seedling_filled",
  baseId: "seedling",
  variant: "filled",
  name: "Seedling",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SeedlingFilledLogo;
