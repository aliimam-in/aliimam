/**
 * Auto-generated logo component: Cigarette Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CigaretteOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CigaretteOffLogo = React.forwardRef<SVGSVGElement, CigaretteOffLogoProps>(
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
      <path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
  <path d="M18 8c0-2.5-2-2.5-2-5" />
  <path d="m2 2 20 20" />
  <path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
  <path d="M22 8c0-2.5-2-2.5-2-5" />
  <path d="M7 12v4" />
    </svg>
  )
);

CigaretteOffLogo.displayName = "CigaretteOffLogo";

export const CigaretteOffLogoMetadata = {
  id: "cigarette-off",
  baseId: "cigarette-off",
  variant: "default",
  name: "Cigarette Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CigaretteOffLogo;
