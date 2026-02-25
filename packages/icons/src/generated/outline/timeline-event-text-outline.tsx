/**
 * Auto-generated logo component: Timeline Event Text Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimelineEventTextOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimelineEventTextOutlineLogo = React.forwardRef<SVGSVGElement, TimelineEventTextOutlineLogoProps>(
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
  <path d="M9 6h6" />
  <path d="M9 9h3" />
    </svg>
  )
);

TimelineEventTextOutlineLogo.displayName = "TimelineEventTextOutlineLogo";

export const TimelineEventTextOutlineLogoMetadata = {
  id: "timeline-event-text-outline",
  baseId: "timeline-event-text-outline",
  variant: "default",
  name: "Timeline Event Text Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimelineEventTextOutlineLogo;
