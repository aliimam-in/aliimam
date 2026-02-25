/**
 * Auto-generated logo component: Activity Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ActivityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ActivityOutlineLogo = React.forwardRef<SVGSVGElement, ActivityOutlineLogoProps>(
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
      <path d="M3 12h4l3 8l4 -16l3 8h4" />
    </svg>
  )
);

ActivityOutlineLogo.displayName = "ActivityOutlineLogo";

export const ActivityOutlineLogoMetadata = {
  id: "activity-outline",
  baseId: "activity-outline",
  variant: "default",
  name: "Activity Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ActivityOutlineLogo;
