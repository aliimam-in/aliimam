/**
 * Auto-generated logo component: Panorama Horizontal (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanoramaHorizontalFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanoramaHorizontalFilledLogo = React.forwardRef<SVGSVGElement, PanoramaHorizontalFilledLogoProps>(
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
      <path d="M19.31 4.591a2 2 0 0 1 2.69 1.873v11c0 1.382 -1.38 2.38 -2.694 1.897c-4.879 -1.845 -9.734 -1.845 -14.612 0c-1.304 .495 -2.694 -.481 -2.694 -1.871v-11.032a2 2 0 0 1 2.676 -1.87l.025 .012l.448 .162c4.572 1.623 9.123 1.622 13.703 -.003z" />
    </svg>
  )
);

PanoramaHorizontalFilledLogo.displayName = "PanoramaHorizontalFilledLogo";

export const PanoramaHorizontalFilledLogoMetadata = {
  id: "panorama-horizontal_filled",
  baseId: "panorama-horizontal",
  variant: "filled",
  name: "Panorama Horizontal",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanoramaHorizontalFilledLogo;
