/**
 * Auto-generated logo component: Volleyball (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VolleyballLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VolleyballLogo = React.forwardRef<SVGSVGElement, VolleyballLogoProps>(
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
      <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" />
  <path d="M12 12a12.6 12.6 0 0 1-8.7 5" />
  <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" />
  <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" />
  <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" />
  <circle cx="12" cy="12" r="10" />
    </svg>
  )
);

VolleyballLogo.displayName = "VolleyballLogo";

export const VolleyballLogoMetadata = {
  id: "volleyball",
  baseId: "volleyball",
  variant: "default",
  name: "Volleyball",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VolleyballLogo;
