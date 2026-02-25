/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserPlus = React.forwardRef<SVGSVGElement, UserPlusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="19" x2="19" y1="8" y2="14" />
  <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
);
UserPlus.displayName = "UserPlus";
export const UserPlusMetadata = { id: "user-plus", baseId: "user-plus", variant: "default", name: "User Plus", category: "user", tags: [], viewBox: "0 0 24 24" } as const;
export default UserPlus;
