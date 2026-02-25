/**
 * Auto-generated logo component: Badges Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgesOutlineLogo = React.forwardRef<SVGSVGElement, BadgesOutlineLogoProps>(
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
      <path d="M17 17v-4l-5 3l-5 -3v4l5 3l5 -3" />
  <path d="M17 8v-4l-5 3l-5 -3v4l5 3l5 -3" />
    </svg>
  )
);

BadgesOutlineLogo.displayName = "BadgesOutlineLogo";

export const BadgesOutlineLogoMetadata = {
  id: "badges-outline",
  baseId: "badges-outline",
  variant: "default",
  name: "Badges Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgesOutlineLogo;
