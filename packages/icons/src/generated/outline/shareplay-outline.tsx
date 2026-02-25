/**
 * Auto-generated logo component: Shareplay Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShareplayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShareplayOutlineLogo = React.forwardRef<SVGSVGElement, ShareplayOutlineLogoProps>(
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
      <path d="M18 18a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8a3 3 0 0 0 3 3" />
  <path d="M9 20h6l-3 -5l-3 5" />
    </svg>
  )
);

ShareplayOutlineLogo.displayName = "ShareplayOutlineLogo";

export const ShareplayOutlineLogoMetadata = {
  id: "shareplay-outline",
  baseId: "shareplay-outline",
  variant: "default",
  name: "Shareplay Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShareplayOutlineLogo;
