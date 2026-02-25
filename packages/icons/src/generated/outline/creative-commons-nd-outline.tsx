/**
 * Auto-generated logo component: Creative Commons Nd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreativeCommonsNdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreativeCommonsNdOutlineLogo = React.forwardRef<SVGSVGElement, CreativeCommonsNdOutlineLogoProps>(
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
  <path d="M9 10h6" />
  <path d="M9 14h6" />
    </svg>
  )
);

CreativeCommonsNdOutlineLogo.displayName = "CreativeCommonsNdOutlineLogo";

export const CreativeCommonsNdOutlineLogoMetadata = {
  id: "creative-commons-nd-outline",
  baseId: "creative-commons-nd-outline",
  variant: "default",
  name: "Creative Commons Nd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreativeCommonsNdOutlineLogo;
