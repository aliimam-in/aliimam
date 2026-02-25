/**
 * Auto-generated logo component: Telescope Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TelescopeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TelescopeOutlineLogo = React.forwardRef<SVGSVGElement, TelescopeOutlineLogoProps>(
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
      <path d="M6 21l6 -5l6 5" />
  <path d="M12 13v8" />
  <path d="M3.294 13.678l.166 .281c.52 .88 1.624 1.265 2.605 .91l14.242 -5.165a1.023 1.023 0 0 0 .565 -1.456l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-12.694 7.618c-1.02 .613 -1.357 1.897 -.76 2.905l-.001 0" />
  <path d="M14 5l3 5.5" />
    </svg>
  )
);

TelescopeOutlineLogo.displayName = "TelescopeOutlineLogo";

export const TelescopeOutlineLogoMetadata = {
  id: "telescope-outline",
  baseId: "telescope-outline",
  variant: "default",
  name: "Telescope Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TelescopeOutlineLogo;
