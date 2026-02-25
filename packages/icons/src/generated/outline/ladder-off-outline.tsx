/**
 * Auto-generated logo component: Ladder Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LadderOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LadderOffOutlineLogo = React.forwardRef<SVGSVGElement, LadderOffOutlineLogoProps>(
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
      <path d="M8 3v1m0 4v13" />
  <path d="M16 3v9m0 4v5" />
  <path d="M8 14h6" />
  <path d="M8 10h2m4 0h2" />
  <path d="M10 6h6" />
  <path d="M8 18h8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LadderOffOutlineLogo.displayName = "LadderOffOutlineLogo";

export const LadderOffOutlineLogoMetadata = {
  id: "ladder-off-outline",
  baseId: "ladder-off-outline",
  variant: "default",
  name: "Ladder Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LadderOffOutlineLogo;
