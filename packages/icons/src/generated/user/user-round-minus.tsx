/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserRoundMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserRoundMinus = React.forwardRef<SVGSVGElement, UserRoundMinusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M2 21a8 8 0 0 1 13.292-6" />
  <circle cx="10" cy="8" r="5" />
  <path d="M22 19h-6" />
    </svg>
  )
);
UserRoundMinus.displayName = "UserRoundMinus";
export const UserRoundMinusMetadata = { id: "user-round-minus", baseId: "user-round-minus", variant: "default", name: "User Round Minus", category: "user", tags: [], viewBox: "0 0 24 24" } as const;
export default UserRoundMinus;
