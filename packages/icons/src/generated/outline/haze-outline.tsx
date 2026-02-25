/**
 * Auto-generated logo component: Haze Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HazeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HazeOutlineLogo = React.forwardRef<SVGSVGElement, HazeOutlineLogoProps>(
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
      <path d="M3 12h1" />
  <path d="M12 3v1" />
  <path d="M20 12h1" />
  <path d="M5.6 5.6l.7 .7" />
  <path d="M18.4 5.6l-.7 .7" />
  <path d="M8 12a4 4 0 1 1 8 0" />
  <path d="M3 16h18" />
  <path d="M3 20h18" />
    </svg>
  )
);

HazeOutlineLogo.displayName = "HazeOutlineLogo";

export const HazeOutlineLogoMetadata = {
  id: "haze-outline",
  baseId: "haze-outline",
  variant: "default",
  name: "Haze Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HazeOutlineLogo;
