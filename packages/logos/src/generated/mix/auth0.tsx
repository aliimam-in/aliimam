/**
 * Auto-generated logo component: Auth0 (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Auth0LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Auth0Logo = React.forwardRef<SVGSVGElement, Auth0LogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z" />
    </svg>
  )
);

Auth0Logo.displayName = "Auth0Logo";

export const Auth0LogoMetadata = {
  id: "auth0",
  baseId: "auth0",
  variant: "default",
  name: "Auth0",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Auth0Logo;
