/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserCog = React.forwardRef<SVGSVGElement, UserCogProps>(
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
      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
  <path d="m14.305 16.53.923-.382" />
  <path d="m15.228 13.852-.923-.383" />
  <path d="m16.852 12.228-.383-.923" />
  <path d="m16.852 17.772-.383.924" />
  <path d="m19.148 12.228.383-.923" />
  <path d="m19.53 18.696-.382-.924" />
  <path d="m20.772 13.852.924-.383" />
  <path d="m20.772 16.148.924.383" />
  <circle cx="18" cy="15" r="3" />
  <circle cx="9" cy="7" r="4" />
    </svg>
  )
);
UserCog.displayName = "UserCog";
export const UserCogMetadata = { 
  id: "user-cog", 
  baseId: "user-cog", 
  variant: "default", 
  name: "User Cog", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserCog;
