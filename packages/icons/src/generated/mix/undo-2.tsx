/**
 * Auto-generated logo component: Undo 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Undo2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Undo2Logo = React.forwardRef<SVGSVGElement, Undo2LogoProps>(
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
      <path d="M9 14 4 9l5-5" />
  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
    </svg>
  )
);

Undo2Logo.displayName = "Undo2Logo";

export const Undo2LogoMetadata = {
  id: "undo-2",
  baseId: "undo-2",
  variant: "default",
  name: "Undo 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Undo2Logo;
