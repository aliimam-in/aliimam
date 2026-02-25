/**
 * Auto-generated logo component: Creative Commons Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreativeCommonsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreativeCommonsOffOutlineLogo = React.forwardRef<SVGSVGElement, CreativeCommonsOffOutlineLogoProps>(
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
      <path d="M5.638 5.634a9 9 0 1 0 12.723 12.733m1.686 -2.332a9 9 0 0 0 -12.093 -12.077" />
  <path d="M10.5 10.5a2.187 2.187 0 0 0 -2.914 .116a1.928 1.928 0 0 0 0 2.768a2.188 2.188 0 0 0 2.914 .116" />
  <path d="M16.5 10.5a2.194 2.194 0 0 0 -2.309 -.302" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CreativeCommonsOffOutlineLogo.displayName = "CreativeCommonsOffOutlineLogo";

export const CreativeCommonsOffOutlineLogoMetadata = {
  id: "creative-commons-off-outline",
  baseId: "creative-commons-off-outline",
  variant: "default",
  name: "Creative Commons Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreativeCommonsOffOutlineLogo;
