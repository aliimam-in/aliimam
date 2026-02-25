/**
 * Auto-generated logo component: Ladder Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LadderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LadderOutlineLogo = React.forwardRef<SVGSVGElement, LadderOutlineLogoProps>(
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
      <path d="M8 3v18" />
  <path d="M16 3v18" />
  <path d="M8 14h8" />
  <path d="M8 10h8" />
  <path d="M8 6h8" />
  <path d="M8 18h8" />
    </svg>
  )
);

LadderOutlineLogo.displayName = "LadderOutlineLogo";

export const LadderOutlineLogoMetadata = {
  id: "ladder-outline",
  baseId: "ladder-outline",
  variant: "default",
  name: "Ladder Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LadderOutlineLogo;
