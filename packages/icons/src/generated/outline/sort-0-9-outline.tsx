/**
 * Auto-generated logo component: Sort 0 9 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Sort09OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Sort09OutlineLogo = React.forwardRef<SVGSVGElement, Sort09OutlineLogoProps>(
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
      <path d="M11 12h2" />
  <path d="M4 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
  <path d="M16 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
    </svg>
  )
);

Sort09OutlineLogo.displayName = "Sort09OutlineLogo";

export const Sort09OutlineLogoMetadata = {
  id: "sort-0-9-outline",
  baseId: "sort-0-9-outline",
  variant: "default",
  name: "Sort 0 9 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Sort09OutlineLogo;
