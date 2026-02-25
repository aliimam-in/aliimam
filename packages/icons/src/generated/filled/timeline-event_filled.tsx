/**
 * Auto-generated logo component: Timeline Event (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimelineEventFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimelineEventFilledLogo = React.forwardRef<SVGSVGElement, TimelineEventFilledLogoProps>(
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
      <path d="M12 17c1.306 0 2.418 .835 2.83 2h5.17a1 1 0 0 1 0 2h-5.171a3.001 3.001 0 0 1 -5.658 0h-5.171a1 1 0 0 1 0 -2h5.17a3.001 3.001 0 0 1 2.83 -2z" />
  <path d="M17 2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2.586l-1.707 1.707a1 1 0 0 1 -1.32 .083l-.094 -.083l-1.708 -1.707h-2.585a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 2 -2h10z" />
    </svg>
  )
);

TimelineEventFilledLogo.displayName = "TimelineEventFilledLogo";

export const TimelineEventFilledLogoMetadata = {
  id: "timeline-event_filled",
  baseId: "timeline-event",
  variant: "filled",
  name: "Timeline Event",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimelineEventFilledLogo;
