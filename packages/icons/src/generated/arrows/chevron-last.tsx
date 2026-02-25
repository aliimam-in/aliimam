/**
 * Auto-generated logo component: Chevron Last (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronLastLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronLastLogo = React.forwardRef<SVGSVGElement, ChevronLastLogoProps>(
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
      <path d="m7 18 6-6-6-6" />
  <path d="M17 6v12" />
    </svg>
  )
);

ChevronLastLogo.displayName = "ChevronLastLogo";

export const ChevronLastLogoMetadata = {
  id: "chevron-last",
  baseId: "chevron-last",
  variant: "default",
  name: "Chevron Last",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronLastLogo;
