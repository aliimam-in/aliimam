/**
 * Auto-generated logo component: Play Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCircleLogo = React.forwardRef<SVGSVGElement, PlayCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
  )
);

PlayCircleLogo.displayName = "PlayCircleLogo";

export const PlayCircleLogoMetadata = {
  id: "play-circle",
  baseId: "play-circle",
  variant: "default",
  name: "Play Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCircleLogo;
