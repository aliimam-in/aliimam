/**
 * Auto-generated logo component: Ironing 1 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ironing1FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ironing1FilledLogo = React.forwardRef<SVGSVGElement, Ironing1FilledLogoProps>(
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
      <path d="M16.459 5a4 4 0 0 1 3.945 3.343l1.387 8.329a2 2 0 0 1 -1.971 2.328h-16.82a1 1 0 0 1 -1 -1a8 8 0 0 1 8 -8h8.652l-.22 -1.329a2 2 0 0 0 -1.811 -1.665l-.162 -.006h-7.459a1 1 0 1 1 0 -2zm-4.449 9h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2" />
    </svg>
  )
);

Ironing1FilledLogo.displayName = "Ironing1FilledLogo";

export const Ironing1FilledLogoMetadata = {
  id: "ironing-1-filled",
  baseId: "ironing-1-filled",
  variant: "default",
  name: "Ironing 1 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ironing1FilledLogo;
