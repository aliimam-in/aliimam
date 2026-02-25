/**
 * Auto-generated logo component: Heart Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartPauseOutlineLogo = React.forwardRef<SVGSVGElement, HeartPauseOutlineLogoProps>(
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
      <path d="M19.5 12.572l-.784 .777m-5.725 5.67l-.991 .981l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

HeartPauseOutlineLogo.displayName = "HeartPauseOutlineLogo";

export const HeartPauseOutlineLogoMetadata = {
  id: "heart-pause-outline",
  baseId: "heart-pause-outline",
  variant: "default",
  name: "Heart Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartPauseOutlineLogo;
