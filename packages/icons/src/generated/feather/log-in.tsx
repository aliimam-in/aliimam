/**
 * Auto-generated logo component: Log In (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogInLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogInLogo = React.forwardRef<SVGSVGElement, LogInLogoProps>(
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
    </svg>
  )
);

LogInLogo.displayName = "LogInLogo";

export const LogInLogoMetadata = {
  id: "log-in",
  baseId: "log-in",
  variant: "default",
  name: "Log In",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogInLogo;
