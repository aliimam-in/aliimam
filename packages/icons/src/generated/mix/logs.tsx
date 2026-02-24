/**
 * Auto-generated logo component: Logs (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogsLogo = React.forwardRef<SVGSVGElement, LogsLogoProps>(
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
      <path d="M3 5h1" />
  <path d="M3 12h1" />
  <path d="M3 19h1" />
  <path d="M8 5h1" />
  <path d="M8 12h1" />
  <path d="M8 19h1" />
  <path d="M13 5h8" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
    </svg>
  )
);

LogsLogo.displayName = "LogsLogo";

export const LogsLogoMetadata = {
  id: "logs",
  baseId: "logs",
  variant: "default",
  name: "Logs",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogsLogo;
