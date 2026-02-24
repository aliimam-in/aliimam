/**
 * Auto-generated logo component: User (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixUserLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixUserLogo = React.forwardRef<SVGSVGElement, MixUserLogoProps>(
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />
    </svg>
  )
);

MixUserLogo.displayName = "MixUserLogo";

export const MixUserLogoMetadata = {
  id: "user",
  baseId: "user",
  variant: "default",
  name: "User",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixUserLogo;
