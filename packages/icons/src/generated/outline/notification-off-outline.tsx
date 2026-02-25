/**
 * Auto-generated logo component: Notification Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NotificationOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NotificationOffOutlineLogo = React.forwardRef<SVGSVGElement, NotificationOffOutlineLogoProps>(
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
      <path d="M6.154 6.187a2 2 0 0 0 -1.154 1.813v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811 -1.151" />
  <path d="M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

NotificationOffOutlineLogo.displayName = "NotificationOffOutlineLogo";

export const NotificationOffOutlineLogoMetadata = {
  id: "notification-off-outline",
  baseId: "notification-off-outline",
  variant: "default",
  name: "Notification Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NotificationOffOutlineLogo;
