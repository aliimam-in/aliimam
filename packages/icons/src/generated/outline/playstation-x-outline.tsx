/**
 * Auto-generated logo component: Playstation X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaystationXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaystationXOutlineLogo = React.forwardRef<SVGSVGElement, PlaystationXOutlineLogoProps>(
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
      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" />
  <path d="M8.5 8.5l7 7" />
  <path d="M8.5 15.5l7 -7" />
    </svg>
  )
);

PlaystationXOutlineLogo.displayName = "PlaystationXOutlineLogo";

export const PlaystationXOutlineLogoMetadata = {
  id: "playstation-x-outline",
  baseId: "playstation-x-outline",
  variant: "default",
  name: "Playstation X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaystationXOutlineLogo;
