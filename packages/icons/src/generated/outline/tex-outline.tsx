/**
 * Auto-generated logo component: Tex Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TexOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TexOutlineLogo = React.forwardRef<SVGSVGElement, TexOutlineLogoProps>(
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
      <path d="M9 8v-1h-6v1" />
  <path d="M6 15v-8" />
  <path d="M21 15l-5 -8" />
  <path d="M16 15l5 -8" />
  <path d="M14 11h-4v8h4" />
  <path d="M10 15h3" />
    </svg>
  )
);

TexOutlineLogo.displayName = "TexOutlineLogo";

export const TexOutlineLogoMetadata = {
  id: "tex-outline",
  baseId: "tex-outline",
  variant: "default",
  name: "Tex Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TexOutlineLogo;
