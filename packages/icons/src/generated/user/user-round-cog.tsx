/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserRoundCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserRoundCog = React.forwardRef<SVGSVGElement, UserRoundCogProps>(
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
      <path d="m14.305 19.53.923-.382" />
  <path d="m15.228 16.852-.923-.383" />
  <path d="m16.852 15.228-.383-.923" />
  <path d="m16.852 20.772-.383.924" />
  <path d="m19.148 15.228.383-.923" />
  <path d="m19.53 21.696-.382-.924" />
  <path d="M2 21a8 8 0 0 1 10.434-7.62" />
  <path d="m20.772 16.852.924-.383" />
  <path d="m20.772 19.148.924.383" />
  <circle cx="10" cy="8" r="5" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);
UserRoundCog.displayName = "UserRoundCog";
export const UserRoundCogMetadata = { 
  id: "user-round-cog", 
  baseId: "user-round-cog", 
  variant: "default", 
  name: "User Round Cog", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserRoundCog;
