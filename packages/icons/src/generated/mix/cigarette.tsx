/**
 * Auto-generated logo component: Cigarette (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CigaretteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CigaretteLogo = React.forwardRef<SVGSVGElement, CigaretteLogoProps>(
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
      <path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
  <path d="M18 8c0-2.5-2-2.5-2-5" />
  <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
  <path d="M22 8c0-2.5-2-2.5-2-5" />
  <path d="M7 12v4" />
    </svg>
  )
);

CigaretteLogo.displayName = "CigaretteLogo";

export const CigaretteLogoMetadata = {
  id: "cigarette",
  baseId: "cigarette",
  variant: "default",
  name: "Cigarette",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CigaretteLogo;
