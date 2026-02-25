/**
 * Auto-generated logo component: Playstation Triangle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaystationTriangleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaystationTriangleOutlineLogo = React.forwardRef<SVGSVGElement, PlaystationTriangleOutlineLogoProps>(
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
  <path d="M7.5 15h9l-4.5 -8l-4.5 8" />
    </svg>
  )
);

PlaystationTriangleOutlineLogo.displayName = "PlaystationTriangleOutlineLogo";

export const PlaystationTriangleOutlineLogoMetadata = {
  id: "playstation-triangle-outline",
  baseId: "playstation-triangle-outline",
  variant: "default",
  name: "Playstation Triangle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaystationTriangleOutlineLogo;
