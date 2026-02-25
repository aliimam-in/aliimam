/**
 * Auto-generated logo component: Login 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Login2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Login2OutlineLogo = React.forwardRef<SVGSVGElement, Login2OutlineLogoProps>(
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
      <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
  <path d="M3 12h13l-3 -3" />
  <path d="M13 15l3 -3" />
    </svg>
  )
);

Login2OutlineLogo.displayName = "Login2OutlineLogo";

export const Login2OutlineLogoMetadata = {
  id: "login-2-outline",
  baseId: "login-2-outline",
  variant: "default",
  name: "Login 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Login2OutlineLogo;
