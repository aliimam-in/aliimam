/**
 * Auto-generated logo component: Badge Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeFilledLogo = React.forwardRef<SVGSVGElement, BadgeFilledLogoProps>(
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
      <path d="M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v13a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-13a1 1 0 0 0 -1.514 -.857z" />
    </svg>
  )
);

BadgeFilledLogo.displayName = "BadgeFilledLogo";

export const BadgeFilledLogoMetadata = {
  id: "badge-filled",
  baseId: "badge-filled",
  variant: "default",
  name: "Badge Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeFilledLogo;
