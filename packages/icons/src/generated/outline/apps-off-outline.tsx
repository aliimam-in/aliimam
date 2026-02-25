/**
 * Auto-generated logo component: Apps Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AppsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AppsOffOutlineLogo = React.forwardRef<SVGSVGElement, AppsOffOutlineLogoProps>(
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
      <path d="M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704a1 1 0 0 1 -.71 .296h-4a1 1 0 0 1 -1 -1v-4c0 -.276 .111 -.525 .292 -.706" />
  <path d="M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704a1 1 0 0 1 -.71 .296h-4a1 1 0 0 1 -1 -1v-4c0 -.276 .111 -.525 .292 -.706" />
  <path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M14 7h6" />
  <path d="M17 4v6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AppsOffOutlineLogo.displayName = "AppsOffOutlineLogo";

export const AppsOffOutlineLogoMetadata = {
  id: "apps-off-outline",
  baseId: "apps-off-outline",
  variant: "default",
  name: "Apps Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AppsOffOutlineLogo;
