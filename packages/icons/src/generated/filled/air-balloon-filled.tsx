/**
 * Auto-generated logo component: Air Balloon Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AirBalloonFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AirBalloonFilledLogo = React.forwardRef<SVGSVGElement, AirBalloonFilledLogoProps>(
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
      <path d="M13 18a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2z" />
  <path d="M12 1a7 7 0 0 1 7 7c0 4.185 -3.297 9 -7 9s-7 -4.815 -7 -9a7 7 0 0 1 7 -7" />
    </svg>
  )
);

AirBalloonFilledLogo.displayName = "AirBalloonFilledLogo";

export const AirBalloonFilledLogoMetadata = {
  id: "air-balloon-filled",
  baseId: "air-balloon-filled",
  variant: "default",
  name: "Air Balloon Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AirBalloonFilledLogo;
