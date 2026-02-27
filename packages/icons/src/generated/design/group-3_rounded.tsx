/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Group3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Group3Rounded = React.forwardRef<SVGSVGElement, Group3RoundedProps>(
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
      <path d="M6 2H18C19.1 2 20 2.9 20 4V8.32001H4V4C4 2.9 4.9 2 6 2Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8.32001V11.88C4 12.96 4.58003 13.96 5.53003 14.49L8.48999 16.16C9.11999 16.51 9.51001 17.18 9.51001 17.9V20C9.51001 21.1 10.41 22 11.51 22H12.51C13.61 22 14.51 21.1 14.51 20V17.9C14.51 17.18 14.9 16.51 15.53 16.16L18.49 14.49C19.43 13.96 20.02 12.96 20.02 11.88V8.32001H4Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Group3Rounded.displayName = "Group3Rounded";
export const Group3RoundedMetadata = { 
  id: "group-3_rounded", 
  baseId: "group-3", 
  variant: "rounded", 
  name: "Group 3", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Group3Rounded;
