/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NotificationCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NotificationCircleRounded = React.forwardRef<SVGSVGElement, NotificationCircleRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.02 2.2C13.36 2.07 12.69 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 11.32 21.93 10.65 21.8 10.01" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
NotificationCircleRounded.displayName = "NotificationCircleRounded";
export const NotificationCircleRoundedMetadata = { 
  id: "notification-circle_rounded", 
  baseId: "notification-circle", 
  variant: "rounded", 
  name: "Notification Circle", 
  category: "notification", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NotificationCircleRounded;
