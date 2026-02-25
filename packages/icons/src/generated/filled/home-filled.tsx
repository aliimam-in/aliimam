/**
 * Auto-generated logo component: Home Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeFilledLogo = React.forwardRef<SVGSVGElement, HomeFilledLogoProps>(
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
      <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
    </svg>
  )
);

HomeFilledLogo.displayName = "HomeFilledLogo";

export const HomeFilledLogoMetadata = {
  id: "home-filled",
  baseId: "home-filled",
  variant: "default",
  name: "Home Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeFilledLogo;
