/**
 * Auto-generated logo component: Drumstick (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DrumstickLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DrumstickLogo = React.forwardRef<SVGSVGElement, DrumstickLogoProps>(
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
      <path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" />
  <path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" />
    </svg>
  )
);

DrumstickLogo.displayName = "DrumstickLogo";

export const DrumstickLogoMetadata = {
  id: "drumstick",
  baseId: "drumstick",
  variant: "default",
  name: "Drumstick",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DrumstickLogo;
