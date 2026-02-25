/**
 * Auto-generated logo component: Creative Commons Zero Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreativeCommonsZeroOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreativeCommonsZeroOutlineLogo = React.forwardRef<SVGSVGElement, CreativeCommonsZeroOutlineLogoProps>(
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
  <path d="M9 12a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
  <path d="M14 9l-4 6" />
    </svg>
  )
);

CreativeCommonsZeroOutlineLogo.displayName = "CreativeCommonsZeroOutlineLogo";

export const CreativeCommonsZeroOutlineLogoMetadata = {
  id: "creative-commons-zero-outline",
  baseId: "creative-commons-zero-outline",
  variant: "default",
  name: "Creative Commons Zero Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreativeCommonsZeroOutlineLogo;
