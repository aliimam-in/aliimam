/**
 * Auto-generated logo component: Infinity (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfinityLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InfinityLogo = React.forwardRef<SVGSVGElement, InfinityLogoProps>(
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
      <path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />
    </svg>
  )
);

InfinityLogo.displayName = "InfinityLogo";

export const InfinityLogoMetadata = {
  id: "infinity",
  baseId: "infinity",
  variant: "default",
  name: "Infinity",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InfinityLogo;
