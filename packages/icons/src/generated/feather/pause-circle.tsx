/**
 * Auto-generated logo component: Pause Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PauseCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PauseCircleLogo = React.forwardRef<SVGSVGElement, PauseCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/>
    </svg>
  )
);

PauseCircleLogo.displayName = "PauseCircleLogo";

export const PauseCircleLogoMetadata = {
  id: "pause-circle",
  baseId: "pause-circle",
  variant: "default",
  name: "Pause Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PauseCircleLogo;
