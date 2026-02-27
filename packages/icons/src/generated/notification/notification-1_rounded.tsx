/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Notification1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Notification1Rounded = React.forwardRef<SVGSVGElement, Notification1RoundedProps>(
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
<path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Notification1Rounded.displayName = "Notification1Rounded";
export const Notification1RoundedMetadata = { 
  id: "notification-1_rounded", 
  baseId: "notification-1", 
  variant: "rounded", 
  name: "Notification 1", 
  category: "notification", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Notification1Rounded;
