/**
 * Auto-generated logo component: Auth0 (default)
 * Category: library
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Auth0Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Auth0 = React.forwardRef<SVGSVGElement, Auth0Props>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M21.98 7.448L19.62 0H4.34698L2.01998 7.448C0.667984 11.76 2.04998 16.654 5.83498 19.463L12.007 24L18.164 19.448C21.919 16.638 23.346 11.76 21.979 7.433L15.819 12.013L18.162 19.463L12.005 14.866L5.84698 19.446L8.20498 12.013L2.01698 7.463L9.64698 7.418L12.008 0L14.364 7.404L21.98 7.448Z" fill="#EB5424"/>
    </svg>
  )
);

Auth0.displayName = "Auth0";

export const Auth0Metadata = {
  id: "Auth0",
  baseId: "Auth0",
  variant: "default",
  name: "Auth0",
  category: "library",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Auth0;
