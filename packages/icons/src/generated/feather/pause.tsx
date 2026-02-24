/**
 * Auto-generated logo component: Pause (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PauseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PauseLogo = React.forwardRef<SVGSVGElement, PauseLogoProps>(
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
      <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
    </svg>
  )
);

PauseLogo.displayName = "PauseLogo";

export const PauseLogoMetadata = {
  id: "pause",
  baseId: "pause",
  variant: "default",
  name: "Pause",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PauseLogo;
