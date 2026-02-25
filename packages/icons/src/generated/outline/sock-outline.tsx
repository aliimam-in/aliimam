/**
 * Auto-generated logo component: Sock Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SockOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SockOutlineLogo = React.forwardRef<SVGSVGElement, SockOutlineLogoProps>(
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
      <path d="M13 3v6l4.798 5.142a4 4 0 0 1 -5.441 5.86l-6.736 -6.41a2 2 0 0 1 -.621 -1.451v-9.141h8" />
  <path d="M7.895 15.768c.708 -.721 1.105 -1.677 1.105 -2.768a4 4 0 0 0 -4 -4" />
    </svg>
  )
);

SockOutlineLogo.displayName = "SockOutlineLogo";

export const SockOutlineLogoMetadata = {
  id: "sock-outline",
  baseId: "sock-outline",
  variant: "default",
  name: "Sock Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SockOutlineLogo;
