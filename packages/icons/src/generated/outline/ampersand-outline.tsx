/**
 * Auto-generated logo component: Ampersand Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AmpersandOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AmpersandOutlineLogo = React.forwardRef<SVGSVGElement, AmpersandOutlineLogoProps>(
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
      <path d="M19 20l-10.403 -10.972a2.948 2.948 0 0 1 0 -4.165a2.94 2.94 0 0 1 4.161 0a2.948 2.948 0 0 1 0 4.165l-4.68 4.687a3.685 3.685 0 0 0 0 5.207a3.675 3.675 0 0 0 5.2 0l5.722 -5.922" />
    </svg>
  )
);

AmpersandOutlineLogo.displayName = "AmpersandOutlineLogo";

export const AmpersandOutlineLogoMetadata = {
  id: "ampersand-outline",
  baseId: "ampersand-outline",
  variant: "default",
  name: "Ampersand Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AmpersandOutlineLogo;
