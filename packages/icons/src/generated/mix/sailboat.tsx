/**
 * Auto-generated logo component: Sailboat (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SailboatLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SailboatLogo = React.forwardRef<SVGSVGElement, SailboatLogoProps>(
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
      <path d="M10 2v15" />
  <path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" />
  <path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" />
    </svg>
  )
);

SailboatLogo.displayName = "SailboatLogo";

export const SailboatLogoMetadata = {
  id: "sailboat",
  baseId: "sailboat",
  variant: "default",
  name: "Sailboat",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SailboatLogo;
