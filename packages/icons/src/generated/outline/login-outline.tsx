/**
 * Auto-generated logo component: Login Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LoginOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LoginOutlineLogo = React.forwardRef<SVGSVGElement, LoginOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
  <path d="M21 12h-13l3 -3" />
  <path d="M11 15l-3 -3" />
    </svg>
  )
);

LoginOutlineLogo.displayName = "LoginOutlineLogo";

export const LoginOutlineLogoMetadata = {
  id: "login-outline",
  baseId: "login-outline",
  variant: "default",
  name: "Login Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LoginOutlineLogo;
