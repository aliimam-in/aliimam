/**
 * Auto-generated logo component: Timeline Event X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimelineEventXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimelineEventXOutlineLogo = React.forwardRef<SVGSVGElement, TimelineEventXOutlineLogoProps>(
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
      <path d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 20h-6" />
  <path d="M14 20h6" />
  <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2" />
  <path d="M13.5 9.5l-3 -3" />
  <path d="M10.5 9.5l3 -3" />
    </svg>
  )
);

TimelineEventXOutlineLogo.displayName = "TimelineEventXOutlineLogo";

export const TimelineEventXOutlineLogoMetadata = {
  id: "timeline-event-x-outline",
  baseId: "timeline-event-x-outline",
  variant: "default",
  name: "Timeline Event X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimelineEventXOutlineLogo;
