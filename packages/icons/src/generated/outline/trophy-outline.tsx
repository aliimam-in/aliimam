/**
 * Auto-generated logo component: Trophy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrophyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrophyOutlineLogo = React.forwardRef<SVGSVGElement, TrophyOutlineLogoProps>(
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
      <path d="M8 21l8 0" />
  <path d="M12 17l0 4" />
  <path d="M7 4l10 0" />
  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
  <path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

TrophyOutlineLogo.displayName = "TrophyOutlineLogo";

export const TrophyOutlineLogoMetadata = {
  id: "trophy-outline",
  baseId: "trophy-outline",
  variant: "default",
  name: "Trophy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrophyOutlineLogo;
