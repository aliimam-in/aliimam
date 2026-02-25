/**
 * Auto-generated logo component: Trophy Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrophyOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrophyOffOutlineLogo = React.forwardRef<SVGSVGElement, TrophyOffOutlineLogoProps>(
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
      <path d="M8 21h8" />
  <path d="M12 17v4" />
  <path d="M8 4h9" />
  <path d="M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5" />
  <path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TrophyOffOutlineLogo.displayName = "TrophyOffOutlineLogo";

export const TrophyOffOutlineLogoMetadata = {
  id: "trophy-off-outline",
  baseId: "trophy-off-outline",
  variant: "default",
  name: "Trophy Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrophyOffOutlineLogo;
