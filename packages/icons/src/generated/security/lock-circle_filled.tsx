/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LockCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LockCircleFilled = React.forwardRef<SVGSVGElement, LockCircleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z" fill="currentColor"/>
<path d="M12 15.0999C12.6075 15.0999 13.1 14.6074 13.1 13.9999C13.1 13.3924 12.6075 12.8999 12 12.8999C11.3925 12.8999 10.9 13.3924 10.9 13.9999C10.9 14.6074 11.3925 15.0999 12 15.0999Z" fill="currentColor"/>
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z" fill="currentColor"/>
    </svg>
  )
);
LockCircleFilled.displayName = "LockCircleFilled";
export const LockCircleFilledMetadata = { 
  id: "lock-circle_filled", 
  baseId: "lock-circle", 
  variant: "filled", 
  name: "Lock Circle", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LockCircleFilled;
