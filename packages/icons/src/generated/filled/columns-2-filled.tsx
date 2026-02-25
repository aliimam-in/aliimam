/**
 * Auto-generated logo component: Columns 2 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Columns2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Columns2FilledLogo = React.forwardRef<SVGSVGElement, Columns2FilledLogoProps>(
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
      <path d="M4 2h6a1 1 0 0 1 1 1v18a1 1 0 0 1 -1 1h-6a2 2 0 0 1 -2 -2v-16a2 2 0 0 1 2 -2" />
  <path d="M14 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-6a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1" />
    </svg>
  )
);

Columns2FilledLogo.displayName = "Columns2FilledLogo";

export const Columns2FilledLogoMetadata = {
  id: "columns-2-filled",
  baseId: "columns-2-filled",
  variant: "default",
  name: "Columns 2 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Columns2FilledLogo;
