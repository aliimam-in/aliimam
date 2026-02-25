/**
 * Auto-generated logo component: Chevrons Up Down (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsUpDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsUpDownLogo = React.forwardRef<SVGSVGElement, ChevronsUpDownLogoProps>(
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
      <path d="m7 15 5 5 5-5" />
  <path d="m7 9 5-5 5 5" />
    </svg>
  )
);

ChevronsUpDownLogo.displayName = "ChevronsUpDownLogo";

export const ChevronsUpDownLogoMetadata = {
  id: "chevrons-up-down",
  baseId: "chevrons-up-down",
  variant: "default",
  name: "Chevrons Up Down",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsUpDownLogo;
