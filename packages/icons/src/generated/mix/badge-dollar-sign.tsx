/**
 * Auto-generated logo component: Badge Dollar Sign (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeDollarSignLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeDollarSignLogo = React.forwardRef<SVGSVGElement, BadgeDollarSignLogoProps>(
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
  <path d="M12 18V6" />
    </svg>
  )
);

BadgeDollarSignLogo.displayName = "BadgeDollarSignLogo";

export const BadgeDollarSignLogoMetadata = {
  id: "badge-dollar-sign",
  baseId: "badge-dollar-sign",
  variant: "default",
  name: "Badge Dollar Sign",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeDollarSignLogo;
