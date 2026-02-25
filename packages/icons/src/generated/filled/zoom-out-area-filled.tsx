/**
 * Auto-generated logo component: Zoom Out Area Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomOutAreaFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomOutAreaFilledLogo = React.forwardRef<SVGSVGElement, ZoomOutAreaFilledLogoProps>(
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
      <path d="M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1 -1.414 1.414l-2.817 -2.816a6 6 0 0 1 -9.476 -4.891l.004 -.225a6 6 0 0 1 5.996 -5.775m2 5h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m-14 0a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2h-1a3 3 0 0 1 -3 -3v-1a1 1 0 0 1 1 -1m0 -5a1 1 0 0 1 1 1v1a1 1 0 0 1 -2 0v-1a1 1 0 0 1 1 -1m3 -7a1 1 0 1 1 0 2h-1a1 1 0 0 0 -1 1v1a1 1 0 1 1 -2 0v-1a3 3 0 0 1 3 -3zm5 0a1 1 0 0 1 0 2h-1a1 1 0 1 1 0 -2zm5 0a3 3 0 0 1 3 3v1a1 1 0 0 1 -2 0v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 0 -2z" />
    </svg>
  )
);

ZoomOutAreaFilledLogo.displayName = "ZoomOutAreaFilledLogo";

export const ZoomOutAreaFilledLogoMetadata = {
  id: "zoom-out-area-filled",
  baseId: "zoom-out-area-filled",
  variant: "default",
  name: "Zoom Out Area Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomOutAreaFilledLogo;
