/**
 * Auto-generated logo component: Military Award Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MilitaryAwardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MilitaryAwardOutlineLogo = React.forwardRef<SVGSVGElement, MilitaryAwardOutlineLogoProps>(
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
      <path d="M8 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M8.5 10.5l-1 -2.5h-5.5l2.48 5.788a2 2 0 0 0 1.84 1.212h2.18" />
  <path d="M15.5 10.5l1 -2.5h5.5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-2.18" />
    </svg>
  )
);

MilitaryAwardOutlineLogo.displayName = "MilitaryAwardOutlineLogo";

export const MilitaryAwardOutlineLogoMetadata = {
  id: "military-award-outline",
  baseId: "military-award-outline",
  variant: "default",
  name: "Military Award Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MilitaryAwardOutlineLogo;
