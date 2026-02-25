/**
 * Auto-generated logo component: Thumb Down Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ThumbDownOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ThumbDownOffOutlineLogo = React.forwardRef<SVGSVGElement, ThumbDownOffOutlineLogoProps>(
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
      <path d="M7 13v-6m-3 -3a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 1 0 4 0v-3m2 -2h1a2 2 0 0 0 2 -2l-1 -5c-.295 -1.26 -1.11 -2.076 -2 -2h-7c-.57 0 -1.102 .159 -1.556 .434" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ThumbDownOffOutlineLogo.displayName = "ThumbDownOffOutlineLogo";

export const ThumbDownOffOutlineLogoMetadata = {
  id: "thumb-down-off-outline",
  baseId: "thumb-down-off-outline",
  variant: "default",
  name: "Thumb Down Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ThumbDownOffOutlineLogo;
