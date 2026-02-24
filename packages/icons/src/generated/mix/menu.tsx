/**
 * Auto-generated logo component: Menu (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMenuLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMenuLogo = React.forwardRef<SVGSVGElement, MixMenuLogoProps>(
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
      <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
    </svg>
  )
);

MixMenuLogo.displayName = "MixMenuLogo";

export const MixMenuLogoMetadata = {
  id: "menu",
  baseId: "menu",
  variant: "default",
  name: "Menu",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMenuLogo;
