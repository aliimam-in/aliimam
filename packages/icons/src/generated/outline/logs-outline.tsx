/**
 * Auto-generated logo component: Logs Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LogsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LogsOutlineLogo = React.forwardRef<SVGSVGElement, LogsOutlineLogoProps>(
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
      <path d="M4 12h.01" />
  <path d="M4 6h.01" />
  <path d="M4 18h.01" />
  <path d="M8 18h2" />
  <path d="M8 12h2" />
  <path d="M8 6h2" />
  <path d="M14 6h6" />
  <path d="M14 12h6" />
  <path d="M14 18h6" />
    </svg>
  )
);

LogsOutlineLogo.displayName = "LogsOutlineLogo";

export const LogsOutlineLogoMetadata = {
  id: "logs-outline",
  baseId: "logs-outline",
  variant: "default",
  name: "Logs Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LogsOutlineLogo;
