/**
 * Auto-generated logo component: Droplet Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletPauseOutlineLogo = React.forwardRef<SVGSVGElement, DropletPauseOutlineLogoProps>(
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
      <path d="M18.952 13.456a6.573 6.573 0 0 0 -.888 -2.579l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.176 7.176 0 0 0 5.517 1.507" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

DropletPauseOutlineLogo.displayName = "DropletPauseOutlineLogo";

export const DropletPauseOutlineLogoMetadata = {
  id: "droplet-pause-outline",
  baseId: "droplet-pause-outline",
  variant: "default",
  name: "Droplet Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletPauseOutlineLogo;
