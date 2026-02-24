/**
 * Auto-generated logo component: Clock (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixClockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixClockLogo = React.forwardRef<SVGSVGElement, MixClockLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
    </svg>
  )
);

MixClockLogo.displayName = "MixClockLogo";

export const MixClockLogoMetadata = {
  id: "clock",
  baseId: "clock",
  variant: "default",
  name: "Clock",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixClockLogo;
