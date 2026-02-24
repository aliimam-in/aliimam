/**
 * Auto-generated logo component: Activity (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ActivityLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ActivityLogo = React.forwardRef<SVGSVGElement, ActivityLogoProps>(
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
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
);

ActivityLogo.displayName = "ActivityLogo";

export const ActivityLogoMetadata = {
  id: "activity",
  baseId: "activity",
  variant: "default",
  name: "Activity",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ActivityLogo;
