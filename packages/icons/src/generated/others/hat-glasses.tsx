/**
 * Auto-generated logo component: Hat Glasses (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HatGlassesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HatGlassesLogo = React.forwardRef<SVGSVGElement, HatGlassesLogoProps>(
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
      <path d="M14 18a2 2 0 0 0-4 0" />
  <path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" />
  <path d="M2 11h20" />
  <circle cx="17" cy="18" r="3" />
  <circle cx="7" cy="18" r="3" />
    </svg>
  )
);

HatGlassesLogo.displayName = "HatGlassesLogo";

export const HatGlassesLogoMetadata = {
  id: "hat-glasses",
  baseId: "hat-glasses",
  variant: "default",
  name: "Hat Glasses",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HatGlassesLogo;
