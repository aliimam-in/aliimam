/**
 * Auto-generated logo component: Monitor Speaker (default)
 * Category: monitor
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MonitorSpeakerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MonitorSpeakerLogo = React.forwardRef<SVGSVGElement, MonitorSpeakerLogoProps>(
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
      <path d="M5.5 20H8" />
  <path d="M17 9h.01" />
  <rect width="10" height="16" x="12" y="4" rx="2" />
  <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
  <circle cx="17" cy="15" r="1" />
    </svg>
  )
);

MonitorSpeakerLogo.displayName = "MonitorSpeakerLogo";

export const MonitorSpeakerLogoMetadata = {
  id: "monitor-speaker",
  baseId: "monitor-speaker",
  variant: "default",
  name: "Monitor Speaker",
  category: "monitor",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MonitorSpeakerLogo;
