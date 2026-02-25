/**
 * Auto-generated logo component: Panorama Vertical (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanoramaVerticalFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanoramaVerticalFilledLogo = React.forwardRef<SVGSVGElement, PanoramaVerticalFilledLogoProps>(
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
      <path d="M17.53 2c1.39 0 2.364 1.389 1.87 2.692l-.013 .026l-.156 .431c-1.623 4.572 -1.622 9.123 .003 13.703l.168 .458a2 2 0 0 1 -1.873 2.69h-11c-1.386 0 -2.394 -1.386 -1.897 -2.694c1.845 -4.879 1.845 -9.734 0 -14.612c-.495 -1.304 .48 -2.694 1.87 -2.694z" />
    </svg>
  )
);

PanoramaVerticalFilledLogo.displayName = "PanoramaVerticalFilledLogo";

export const PanoramaVerticalFilledLogoMetadata = {
  id: "panorama-vertical_filled",
  baseId: "panorama-vertical",
  variant: "filled",
  name: "Panorama Vertical",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanoramaVerticalFilledLogo;
