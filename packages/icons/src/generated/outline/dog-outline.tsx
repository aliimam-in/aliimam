/**
 * Auto-generated logo component: Dog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DogOutlineLogo = React.forwardRef<SVGSVGElement, DogOutlineLogoProps>(
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
      <path d="M11 5h2" />
  <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" />
  <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2" />
  <path d="M12 18v2" />
  <path d="M10 11v.01" />
  <path d="M14 11v.01" />
  <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815" />
  <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815" />
    </svg>
  )
);

DogOutlineLogo.displayName = "DogOutlineLogo";

export const DogOutlineLogoMetadata = {
  id: "dog-outline",
  baseId: "dog-outline",
  variant: "default",
  name: "Dog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DogOutlineLogo;
