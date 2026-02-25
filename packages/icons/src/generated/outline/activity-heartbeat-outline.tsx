/**
 * Auto-generated logo component: Activity Heartbeat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ActivityHeartbeatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ActivityHeartbeatOutlineLogo = React.forwardRef<SVGSVGElement, ActivityHeartbeatOutlineLogoProps>(
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
      <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
    </svg>
  )
);

ActivityHeartbeatOutlineLogo.displayName = "ActivityHeartbeatOutlineLogo";

export const ActivityHeartbeatOutlineLogoMetadata = {
  id: "activity-heartbeat-outline",
  baseId: "activity-heartbeat-outline",
  variant: "default",
  name: "Activity Heartbeat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ActivityHeartbeatOutlineLogo;
