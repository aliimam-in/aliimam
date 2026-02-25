/**
 * Auto-generated logo component: Plug Zap (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlugZapLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlugZapLogo = React.forwardRef<SVGSVGElement, PlugZapLogoProps>(
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
      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
  <path d="m2 22 3-3" />
  <path d="M7.5 13.5 10 11" />
  <path d="M10.5 16.5 13 14" />
  <path d="m18 3-4 4h6l-4 4" />
    </svg>
  )
);

PlugZapLogo.displayName = "PlugZapLogo";

export const PlugZapLogoMetadata = {
  id: "plug-zap",
  baseId: "plug-zap",
  variant: "default",
  name: "Plug Zap",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlugZapLogo;
