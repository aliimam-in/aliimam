/**
 * Auto-generated logo component: Timeline Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimelineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimelineOutlineLogo = React.forwardRef<SVGSVGElement, TimelineOutlineLogoProps>(
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
      <path d="M4 16l6 -7l5 5l5 -6" />
  <path d="M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M9 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

TimelineOutlineLogo.displayName = "TimelineOutlineLogo";

export const TimelineOutlineLogoMetadata = {
  id: "timeline-outline",
  baseId: "timeline-outline",
  variant: "default",
  name: "Timeline Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimelineOutlineLogo;
