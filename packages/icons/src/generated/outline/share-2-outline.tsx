/**
 * Auto-generated logo component: Share 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Share2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Share2OutlineLogo = React.forwardRef<SVGSVGElement, Share2OutlineLogoProps>(
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
      <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
  <path d="M12 14v-11" />
  <path d="M9 6l3 -3l3 3" />
    </svg>
  )
);

Share2OutlineLogo.displayName = "Share2OutlineLogo";

export const Share2OutlineLogoMetadata = {
  id: "share-2-outline",
  baseId: "share-2-outline",
  variant: "default",
  name: "Share 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Share2OutlineLogo;
