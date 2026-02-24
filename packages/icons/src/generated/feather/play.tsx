/**
 * Auto-generated logo component: Play (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayLogo = React.forwardRef<SVGSVGElement, PlayLogoProps>(
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
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  )
);

PlayLogo.displayName = "PlayLogo";

export const PlayLogoMetadata = {
  id: "play",
  baseId: "play",
  variant: "default",
  name: "Play",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayLogo;
