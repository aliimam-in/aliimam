/**
 * Auto-generated logo component: Auth 2fa Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Auth2faOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Auth2faOutlineLogo = React.forwardRef<SVGSVGElement, Auth2faOutlineLogoProps>(
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
      <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
  <path d="M10 16v-8h4" />
  <path d="M10 12l3 0" />
  <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
  <path d="M17 13l4 0" />
    </svg>
  )
);

Auth2faOutlineLogo.displayName = "Auth2faOutlineLogo";

export const Auth2faOutlineLogoMetadata = {
  id: "auth-2fa-outline",
  baseId: "auth-2fa-outline",
  variant: "default",
  name: "Auth 2fa Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Auth2faOutlineLogo;
