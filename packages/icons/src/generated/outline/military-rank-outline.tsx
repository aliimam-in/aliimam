/**
 * Auto-generated logo component: Military Rank Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MilitaryRankOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MilitaryRankOutlineLogo = React.forwardRef<SVGSVGElement, MilitaryRankOutlineLogoProps>(
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
      <path d="M18 7v12a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-12l6 -4l6 4" />
  <path d="M10 13l2 -1l2 1" />
  <path d="M10 17l2 -1l2 1" />
  <path d="M10 9l2 -1l2 1" />
    </svg>
  )
);

MilitaryRankOutlineLogo.displayName = "MilitaryRankOutlineLogo";

export const MilitaryRankOutlineLogoMetadata = {
  id: "military-rank-outline",
  baseId: "military-rank-outline",
  variant: "default",
  name: "Military Rank Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MilitaryRankOutlineLogo;
