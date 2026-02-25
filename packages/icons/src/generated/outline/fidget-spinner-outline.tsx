/**
 * Auto-generated logo component: Fidget Spinner Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FidgetSpinnerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FidgetSpinnerOutlineLogo = React.forwardRef<SVGSVGElement, FidgetSpinnerOutlineLogoProps>(
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
      <path d="M18 16v.01" />
  <path d="M6 16v.01" />
  <path d="M12 5v.01" />
  <path d="M12 12v.01" />
  <path d="M12 1a4 4 0 0 1 2.001 7.464l.001 .072a3.998 3.998 0 0 1 1.987 3.758l.22 .128a3.978 3.978 0 0 1 1.591 -.417l.2 -.005a4 4 0 1 1 -3.994 3.77l-.28 -.16c-.522 .25 -1.108 .39 -1.726 .39c-.619 0 -1.205 -.14 -1.728 -.391l-.279 .16l.007 .231a4 4 0 1 1 -2.212 -3.579l.222 -.129a3.998 3.998 0 0 1 1.988 -3.756l.002 -.071a4 4 0 0 1 -1.995 -3.265l-.005 -.2a4 4 0 0 1 4 -4" />
    </svg>
  )
);

FidgetSpinnerOutlineLogo.displayName = "FidgetSpinnerOutlineLogo";

export const FidgetSpinnerOutlineLogoMetadata = {
  id: "fidget-spinner-outline",
  baseId: "fidget-spinner-outline",
  variant: "default",
  name: "Fidget Spinner Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FidgetSpinnerOutlineLogo;
