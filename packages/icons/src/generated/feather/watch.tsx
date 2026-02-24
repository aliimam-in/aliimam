/**
 * Auto-generated logo component: Watch (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WatchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WatchLogo = React.forwardRef<SVGSVGElement, WatchLogoProps>(
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
      <circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/>
    </svg>
  )
);

WatchLogo.displayName = "WatchLogo";

export const WatchLogoMetadata = {
  id: "watch",
  baseId: "watch",
  variant: "default",
  name: "Watch",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WatchLogo;
