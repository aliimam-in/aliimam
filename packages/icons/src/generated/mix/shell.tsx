/**
 * Auto-generated logo component: Shell (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShellLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShellLogo = React.forwardRef<SVGSVGElement, ShellLogoProps>(
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
      <path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
    </svg>
  )
);

ShellLogo.displayName = "ShellLogo";

export const ShellLogoMetadata = {
  id: "shell",
  baseId: "shell",
  variant: "default",
  name: "Shell",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShellLogo;
