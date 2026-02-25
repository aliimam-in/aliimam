/**
 * Auto-generated logo component: Live Photo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LivePhotoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LivePhotoOutlineLogo = React.forwardRef<SVGSVGElement, LivePhotoOutlineLogoProps>(
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
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M15.9 20.11l0 .01" />
  <path d="M19.04 17.61l0 .01" />
  <path d="M20.77 14l0 .01" />
  <path d="M20.77 10l0 .01" />
  <path d="M19.04 6.39l0 .01" />
  <path d="M15.9 3.89l0 .01" />
  <path d="M12 3l0 .01" />
  <path d="M8.1 3.89l0 .01" />
  <path d="M4.96 6.39l0 .01" />
  <path d="M3.23 10l0 .01" />
  <path d="M3.23 14l0 .01" />
  <path d="M4.96 17.61l0 .01" />
  <path d="M8.1 20.11l0 .01" />
  <path d="M12 21l0 .01" />
    </svg>
  )
);

LivePhotoOutlineLogo.displayName = "LivePhotoOutlineLogo";

export const LivePhotoOutlineLogoMetadata = {
  id: "live-photo-outline",
  baseId: "live-photo-outline",
  variant: "default",
  name: "Live Photo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LivePhotoOutlineLogo;
