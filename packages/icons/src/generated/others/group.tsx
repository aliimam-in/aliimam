/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GroupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Group = React.forwardRef<SVGSVGElement, GroupProps>(
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
  <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
  <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
  <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
  <rect width="7" height="5" x="7" y="7" rx="1" />
  <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
);
Group.displayName = "Group";
export const GroupMetadata = { 
  id: "group", 
  baseId: "group", 
  variant: "default", 
  name: "Group", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Group;
