/**
 * Auto-generated logo component: Pilcrow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PilcrowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PilcrowRightOutlineLogo = React.forwardRef<SVGSVGElement, PilcrowRightOutlineLogoProps>(
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
      <path d="M11 9h-2a3 3 0 1 1 0 -6h7" />
  <path d="M11 3v11" />
  <path d="M15 3v11" />
  <path d="M21 18h-18" />
  <path d="M18 15l3 3l-3 3" />
    </svg>
  )
);

PilcrowRightOutlineLogo.displayName = "PilcrowRightOutlineLogo";

export const PilcrowRightOutlineLogoMetadata = {
  id: "pilcrow-right-outline",
  baseId: "pilcrow-right-outline",
  variant: "default",
  name: "Pilcrow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PilcrowRightOutlineLogo;
