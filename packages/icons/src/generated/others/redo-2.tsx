/**
 * Auto-generated logo component: Redo 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Redo2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Redo2Logo = React.forwardRef<SVGSVGElement, Redo2LogoProps>(
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
      <path d="m15 14 5-5-5-5" />
  <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />
    </svg>
  )
);

Redo2Logo.displayName = "Redo2Logo";

export const Redo2LogoMetadata = {
  id: "redo-2",
  baseId: "redo-2",
  variant: "default",
  name: "Redo 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Redo2Logo;
