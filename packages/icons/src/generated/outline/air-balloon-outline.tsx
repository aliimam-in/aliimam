/**
 * Auto-generated logo component: Air Balloon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AirBalloonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AirBalloonOutlineLogo = React.forwardRef<SVGSVGElement, AirBalloonOutlineLogoProps>(
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
      <path d="M10 20a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -1" />
  <path d="M12 16c3.314 0 6 -4.686 6 -8a6 6 0 1 0 -12 0c0 3.314 2.686 8 6 8" />
  <path d="M10 9a2 7 0 1 0 4 0a2 7 0 1 0 -4 0" />
    </svg>
  )
);

AirBalloonOutlineLogo.displayName = "AirBalloonOutlineLogo";

export const AirBalloonOutlineLogoMetadata = {
  id: "air-balloon-outline",
  baseId: "air-balloon-outline",
  variant: "default",
  name: "Air Balloon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AirBalloonOutlineLogo;
