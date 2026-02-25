/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserLock = React.forwardRef<SVGSVGElement, UserLockProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 16v-2a2 2 0 0 0-4 0v2" />
  <path d="M9.5 15H7a4 4 0 0 0-4 4v2" />
  <circle cx="10" cy="7" r="4" />
  <rect x="13" y="16" width="8" height="5" rx=".899" />
    </svg>
  )
);
UserLock.displayName = "UserLock";
export const UserLockMetadata = { id: "user-lock", baseId: "user-lock", variant: "default", name: "User Lock", category: "user", tags: [], viewBox: "0 0 24 24" } as const;
export default UserLock;
