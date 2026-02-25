/**
 * Auto-generated logo component: Clock Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockShareOutlineLogo = React.forwardRef<SVGSVGElement, ClockShareOutlineLogoProps>(
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
      <path d="M20.943 13.016a9 9 0 1 0 -8.915 7.984" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
  <path d="M12 7v5l2 2" />
    </svg>
  )
);

ClockShareOutlineLogo.displayName = "ClockShareOutlineLogo";

export const ClockShareOutlineLogoMetadata = {
  id: "clock-share-outline",
  baseId: "clock-share-outline",
  variant: "default",
  name: "Clock Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockShareOutlineLogo;
