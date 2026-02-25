/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UsersRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsersRound = React.forwardRef<SVGSVGElement, UsersRoundProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 21a8 8 0 0 0-16 0" />
  <circle cx="10" cy="8" r="5" />
  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  )
);
UsersRound.displayName = "UsersRound";
export const UsersRoundMetadata = { id: "users-round", baseId: "users-round", variant: "default", name: "Users Round", category: "user", tags: [], viewBox: "0 0 24 24" } as const;
export default UsersRound;
