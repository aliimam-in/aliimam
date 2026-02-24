/**
 * Auto-generated logo component: Badge Cent (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeCentLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeCentLogo = React.forwardRef<SVGSVGElement, BadgeCentLogoProps>(
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
  <path d="M12 7v10" />
  <path d="M15.4 10a4 4 0 1 0 0 4" />
    </svg>
  )
);

BadgeCentLogo.displayName = "BadgeCentLogo";

export const BadgeCentLogoMetadata = {
  id: "badge-cent",
  baseId: "badge-cent",
  variant: "default",
  name: "Badge Cent",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeCentLogo;
