/**
 * Auto-generated logo component: Repeat 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Repeat2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Repeat2Logo = React.forwardRef<SVGSVGElement, Repeat2LogoProps>(
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
      <path d="m2 9 3-3 3 3" />
  <path d="M13 18H7a2 2 0 0 1-2-2V6" />
  <path d="m22 15-3 3-3-3" />
  <path d="M11 6h6a2 2 0 0 1 2 2v10" />
    </svg>
  )
);

Repeat2Logo.displayName = "Repeat2Logo";

export const Repeat2LogoMetadata = {
  id: "repeat-2",
  baseId: "repeat-2",
  variant: "default",
  name: "Repeat 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Repeat2Logo;
