/**
 * Auto-generated logo component: Stop Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StopCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StopCircleLogo = React.forwardRef<SVGSVGElement, StopCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/>
    </svg>
  )
);

StopCircleLogo.displayName = "StopCircleLogo";

export const StopCircleLogoMetadata = {
  id: "stop-circle",
  baseId: "stop-circle",
  variant: "default",
  name: "Stop Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StopCircleLogo;
