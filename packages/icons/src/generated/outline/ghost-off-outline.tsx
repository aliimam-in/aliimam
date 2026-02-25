/**
 * Auto-generated logo component: Ghost Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GhostOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GhostOffOutlineLogo = React.forwardRef<SVGSVGElement, GhostOffOutlineLogoProps>(
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
      <path d="M8.794 4.776a7 7 0 0 1 10.206 6.224v4m-.12 3.898a1.779 1.779 0 0 1 -2.98 .502a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7c0 -1.683 .594 -3.227 1.583 -4.434" />
  <path d="M14 10h.01" />
  <path d="M10 14a3.5 3.5 0 0 0 4 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GhostOffOutlineLogo.displayName = "GhostOffOutlineLogo";

export const GhostOffOutlineLogoMetadata = {
  id: "ghost-off-outline",
  baseId: "ghost-off-outline",
  variant: "default",
  name: "Ghost Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GhostOffOutlineLogo;
