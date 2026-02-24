/**
 * Auto-generated logo component: Monitor X (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MonitorXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MonitorXLogo = React.forwardRef<SVGSVGElement, MonitorXLogoProps>(
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
      <path d="m14.5 12.5-5-5" />
  <path d="m9.5 12.5 5-5" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
  <path d="M12 17v4" />
  <path d="M8 21h8" />
    </svg>
  )
);

MonitorXLogo.displayName = "MonitorXLogo";

export const MonitorXLogoMetadata = {
  id: "monitor-x",
  baseId: "monitor-x",
  variant: "default",
  name: "Monitor X",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MonitorXLogo;
