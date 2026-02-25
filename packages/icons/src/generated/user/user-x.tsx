/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserX = React.forwardRef<SVGSVGElement, UserXProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" />
    </svg>
  )
);
UserX.displayName = "UserX";
export const UserXMetadata = { id: "user-x", baseId: "user-x", variant: "default", name: "User X", category: "user", tags: [], viewBox: "0 0 24 24" } as const;
export default UserX;
