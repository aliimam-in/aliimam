/**
 * Auto-generated logo component: Unlink 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Unlink2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Unlink2Logo = React.forwardRef<SVGSVGElement, Unlink2LogoProps>(
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
      <path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" />
    </svg>
  )
);

Unlink2Logo.displayName = "Unlink2Logo";

export const Unlink2LogoMetadata = {
  id: "unlink-2",
  baseId: "unlink-2",
  variant: "default",
  name: "Unlink 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Unlink2Logo;
