/**
 * Auto-generated logo component: Flag Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagPauseOutlineLogo = React.forwardRef<SVGSVGElement, FlagPauseOutlineLogoProps>(
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
      <path d="M13.536 15.029a4.987 4.987 0 0 1 -1.536 -1.029a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5" />
  <path d="M5 21v-7" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

FlagPauseOutlineLogo.displayName = "FlagPauseOutlineLogo";

export const FlagPauseOutlineLogoMetadata = {
  id: "flag-pause-outline",
  baseId: "flag-pause-outline",
  variant: "default",
  name: "Flag Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagPauseOutlineLogo;
