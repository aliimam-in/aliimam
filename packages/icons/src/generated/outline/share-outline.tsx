/**
 * Auto-generated logo component: Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShareOutlineLogo = React.forwardRef<SVGSVGElement, ShareOutlineLogoProps>(
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
      <path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M8.7 10.7l6.6 -3.4" />
  <path d="M8.7 13.3l6.6 3.4" />
    </svg>
  )
);

ShareOutlineLogo.displayName = "ShareOutlineLogo";

export const ShareOutlineLogoMetadata = {
  id: "share-outline",
  baseId: "share-outline",
  variant: "default",
  name: "Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShareOutlineLogo;
