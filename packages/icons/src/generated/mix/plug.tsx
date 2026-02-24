/**
 * Auto-generated logo component: Plug (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlugLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlugLogo = React.forwardRef<SVGSVGElement, PlugLogoProps>(
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
      <path d="M12 22v-5" />
  <path d="M15 8V2" />
  <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
  <path d="M9 8V2" />
    </svg>
  )
);

PlugLogo.displayName = "PlugLogo";

export const PlugLogoMetadata = {
  id: "plug",
  baseId: "plug",
  variant: "default",
  name: "Plug",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlugLogo;
