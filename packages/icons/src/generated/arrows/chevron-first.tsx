/**
 * Auto-generated logo component: Chevron First (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronFirstLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronFirstLogo = React.forwardRef<SVGSVGElement, ChevronFirstLogoProps>(
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
      <path d="m17 18-6-6 6-6" />
  <path d="M7 6v12" />
    </svg>
  )
);

ChevronFirstLogo.displayName = "ChevronFirstLogo";

export const ChevronFirstLogoMetadata = {
  id: "chevron-first",
  baseId: "chevron-first",
  variant: "default",
  name: "Chevron First",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronFirstLogo;
