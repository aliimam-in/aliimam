/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ActivityProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Activity = React.forwardRef<SVGSVGElement, ActivityProps>(
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
);
Activity.displayName = "Activity";
export const ActivityMetadata = { 
  id: "activity", 
  baseId: "activity", 
  variant: "default", 
  name: "Activity", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Activity;
