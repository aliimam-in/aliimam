/**
 * Auto-generated logo component: Playstation Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaystationCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaystationCircleOutlineLogo = React.forwardRef<SVGSVGElement, PlaystationCircleOutlineLogoProps>(
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
  <path d="M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
    </svg>
  )
);

PlaystationCircleOutlineLogo.displayName = "PlaystationCircleOutlineLogo";

export const PlaystationCircleOutlineLogoMetadata = {
  id: "playstation-circle-outline",
  baseId: "playstation-circle-outline",
  variant: "default",
  name: "Playstation Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaystationCircleOutlineLogo;
