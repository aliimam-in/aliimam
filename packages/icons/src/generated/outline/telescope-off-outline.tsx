/**
 * Auto-generated logo component: Telescope Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TelescopeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TelescopeOffOutlineLogo = React.forwardRef<SVGSVGElement, TelescopeOffOutlineLogoProps>(
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
  <path d="M8.238 8.264l-4.183 2.51c-1.02 .614 -1.357 1.898 -.76 2.906l.165 .28c.52 .88 1.624 1.266 2.605 .91l6.457 -2.34m2.907 -1.055l4.878 -1.77a1.023 1.023 0 0 0 .565 -1.455l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-6.016 3.61" />
  <path d="M14 5l3 5.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TelescopeOffOutlineLogo.displayName = "TelescopeOffOutlineLogo";

export const TelescopeOffOutlineLogoMetadata = {
  id: "telescope-off-outline",
  baseId: "telescope-off-outline",
  variant: "default",
  name: "Telescope Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TelescopeOffOutlineLogo;
