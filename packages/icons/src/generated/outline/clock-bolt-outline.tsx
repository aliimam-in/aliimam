/**
 * Auto-generated logo component: Clock Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockBoltOutlineLogo = React.forwardRef<SVGSVGElement, ClockBoltOutlineLogoProps>(
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
      <path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
  <path d="M12 7v5l3 3" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

ClockBoltOutlineLogo.displayName = "ClockBoltOutlineLogo";

export const ClockBoltOutlineLogoMetadata = {
  id: "clock-bolt-outline",
  baseId: "clock-bolt-outline",
  variant: "default",
  name: "Clock Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockBoltOutlineLogo;
