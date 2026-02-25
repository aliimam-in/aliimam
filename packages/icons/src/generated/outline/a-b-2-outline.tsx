/**
 * Auto-generated logo component: A B 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AB2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AB2OutlineLogo = React.forwardRef<SVGSVGElement, AB2OutlineLogoProps>(
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
      <path d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3" />
  <path d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3" />
  <path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" />
  <path d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9" />
  <path d="M8 7h-4" />
    </svg>
  )
);

AB2OutlineLogo.displayName = "AB2OutlineLogo";

export const AB2OutlineLogoMetadata = {
  id: "a-b-2-outline",
  baseId: "a-b-2-outline",
  variant: "default",
  name: "A B 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AB2OutlineLogo;
