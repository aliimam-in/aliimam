/**
 * Auto-generated logo component: Sleigh Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SleighOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SleighOutlineLogo = React.forwardRef<SVGSVGElement, SleighOutlineLogoProps>(
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
      <path d="M3 19h15a4 4 0 0 0 4 -4" />
  <path d="M16 15h-9a4 4 0 0 1 -4 -4v-6l1.243 1.243a6 6 0 0 0 4.242 1.757h3.515v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5 -1.5a1.5 1.5 0 0 1 3 0v1.5a3 3 0 0 1 -3 3" />
  <path d="M15 15v4" />
  <path d="M7 15v4" />
    </svg>
  )
);

SleighOutlineLogo.displayName = "SleighOutlineLogo";

export const SleighOutlineLogoMetadata = {
  id: "sleigh-outline",
  baseId: "sleigh-outline",
  variant: "default",
  name: "Sleigh Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SleighOutlineLogo;
