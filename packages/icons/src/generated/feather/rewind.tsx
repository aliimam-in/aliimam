/**
 * Auto-generated logo component: Rewind (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RewindLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RewindLogo = React.forwardRef<SVGSVGElement, RewindLogoProps>(
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
      <polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/>
    </svg>
  )
);

RewindLogo.displayName = "RewindLogo";

export const RewindLogoMetadata = {
  id: "rewind",
  baseId: "rewind",
  variant: "default",
  name: "Rewind",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RewindLogo;
