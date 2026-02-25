/**
 * Auto-generated logo component: Logout Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogoutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogoutOutlineLogo = React.forwardRef<SVGSVGElement, LogoutOutlineLogoProps>(
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
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
  <path d="M9 12h12l-3 -3" />
  <path d="M18 15l3 -3" />
    </svg>
  )
);

LogoutOutlineLogo.displayName = "LogoutOutlineLogo";

export const LogoutOutlineLogoMetadata = {
  id: "logout-outline",
  baseId: "logout-outline",
  variant: "default",
  name: "Logout Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogoutOutlineLogo;
