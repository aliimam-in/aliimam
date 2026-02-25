/**
 * Auto-generated logo component: Notification Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NotificationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NotificationOutlineLogo = React.forwardRef<SVGSVGElement, NotificationOutlineLogoProps>(
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
      <path d="M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
  <path d="M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

NotificationOutlineLogo.displayName = "NotificationOutlineLogo";

export const NotificationOutlineLogoMetadata = {
  id: "notification-outline",
  baseId: "notification-outline",
  variant: "default",
  name: "Notification Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NotificationOutlineLogo;
