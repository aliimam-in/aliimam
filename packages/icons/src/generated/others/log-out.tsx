/**
 * Auto-generated logo component: Log Out (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogOutLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogOutLogo = React.forwardRef<SVGSVGElement, LogOutLogoProps>(
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
      <path d="m16 17 5-5-5-5" />
  <path d="M21 12H9" />
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </svg>
  )
);

LogOutLogo.displayName = "LogOutLogo";

export const LogOutLogoMetadata = {
  id: "log-out",
  baseId: "log-out",
  variant: "default",
  name: "Log Out",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogOutLogo;
