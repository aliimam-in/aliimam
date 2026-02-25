/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserFilled = React.forwardRef<SVGSVGElement, UserFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
    </svg>
  )
);
UserFilled.displayName = "UserFilled";
export const UserFilledMetadata = { id: "user_filled", baseId: "user", variant: "filled", name: "User", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default UserFilled;
