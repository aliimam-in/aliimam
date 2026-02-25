/**
 * Auto-generated logo component: Server 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Server2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Server2OutlineLogo = React.forwardRef<SVGSVGElement, Server2OutlineLogoProps>(
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
      <path d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" />
  <path d="M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2" />
  <path d="M7 8l0 .01" />
  <path d="M7 16l0 .01" />
  <path d="M11 8h6" />
  <path d="M11 16h6" />
    </svg>
  )
);

Server2OutlineLogo.displayName = "Server2OutlineLogo";

export const Server2OutlineLogoMetadata = {
  id: "server-2-outline",
  baseId: "server-2-outline",
  variant: "default",
  name: "Server 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Server2OutlineLogo;
