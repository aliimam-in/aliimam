/**
 * Auto-generated logo component: Columns 1 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Columns1FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Columns1FilledLogo = React.forwardRef<SVGSVGElement, Columns1FilledLogoProps>(
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
      <path d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-16a2 2 0 0 1 2 -2z" />
    </svg>
  )
);

Columns1FilledLogo.displayName = "Columns1FilledLogo";

export const Columns1FilledLogoMetadata = {
  id: "columns-1-filled",
  baseId: "columns-1-filled",
  variant: "default",
  name: "Columns 1 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Columns1FilledLogo;
