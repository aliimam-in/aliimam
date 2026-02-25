/**
 * Auto-generated logo component: Server Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ServerCogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ServerCogOutlineLogo = React.forwardRef<SVGSVGElement, ServerCogOutlineLogoProps>(
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
  <path d="M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5" />
  <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M18 14.5v1.5" />
  <path d="M18 20v1.5" />
  <path d="M21.032 16.25l-1.299 .75" />
  <path d="M16.27 19l-1.3 .75" />
  <path d="M14.97 16.25l1.3 .75" />
  <path d="M19.733 19l1.3 .75" />
  <path d="M7 8v.01" />
  <path d="M7 16v.01" />
    </svg>
  )
);

ServerCogOutlineLogo.displayName = "ServerCogOutlineLogo";

export const ServerCogOutlineLogoMetadata = {
  id: "server-cog-outline",
  baseId: "server-cog-outline",
  variant: "default",
  name: "Server Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ServerCogOutlineLogo;
