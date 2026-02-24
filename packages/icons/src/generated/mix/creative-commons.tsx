/**
 * Auto-generated logo component: Creative Commons (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CreativeCommonsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CreativeCommonsLogo = React.forwardRef<SVGSVGElement, CreativeCommonsLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
  <path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
    </svg>
  )
);

CreativeCommonsLogo.displayName = "CreativeCommonsLogo";

export const CreativeCommonsLogoMetadata = {
  id: "creative-commons",
  baseId: "creative-commons",
  variant: "default",
  name: "Creative Commons",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CreativeCommonsLogo;
