/**
 * Auto-generated logo component: Syringe (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SyringeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SyringeLogo = React.forwardRef<SVGSVGElement, SyringeLogoProps>(
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
      <path d="m18 2 4 4" />
  <path d="m17 7 3-3" />
  <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
  <path d="m9 11 4 4" />
  <path d="m5 19-3 3" />
  <path d="m14 4 6 6" />
    </svg>
  )
);

SyringeLogo.displayName = "SyringeLogo";

export const SyringeLogoMetadata = {
  id: "syringe",
  baseId: "syringe",
  variant: "default",
  name: "Syringe",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SyringeLogo;
