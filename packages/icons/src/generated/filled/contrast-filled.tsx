/**
 * Auto-generated logo component: Contrast Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ContrastFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ContrastFilledLogo = React.forwardRef<SVGSVGElement, ContrastFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-9 1.732a8 8 0 0 0 4.001 14.928l-.001 -16a8 8 0 0 0 -4 1.072" />
    </svg>
  )
);

ContrastFilledLogo.displayName = "ContrastFilledLogo";

export const ContrastFilledLogoMetadata = {
  id: "contrast-filled",
  baseId: "contrast-filled",
  variant: "default",
  name: "Contrast Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ContrastFilledLogo;
