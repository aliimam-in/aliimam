/**
 * Auto-generated logo component: Server Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ServerOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ServerOffLogo = React.forwardRef<SVGSVGElement, ServerOffLogoProps>(
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
      <path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
  <path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
  <path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
  <path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
  <path d="M6 18h.01" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

ServerOffLogo.displayName = "ServerOffLogo";

export const ServerOffLogoMetadata = {
  id: "server-off",
  baseId: "server-off",
  variant: "default",
  name: "Server Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ServerOffLogo;
