/**
 * Auto-generated logo component: Creative Commons Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreativeCommonsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreativeCommonsOutlineLogo = React.forwardRef<SVGSVGElement, CreativeCommonsOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116" />
  <path d="M16.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116" />
    </svg>
  )
);

CreativeCommonsOutlineLogo.displayName = "CreativeCommonsOutlineLogo";

export const CreativeCommonsOutlineLogoMetadata = {
  id: "creative-commons-outline",
  baseId: "creative-commons-outline",
  variant: "default",
  name: "Creative Commons Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreativeCommonsOutlineLogo;
