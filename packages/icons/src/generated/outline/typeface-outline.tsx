/**
 * Auto-generated logo component: Typeface Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TypefaceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TypefaceOutlineLogo = React.forwardRef<SVGSVGElement, TypefaceOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -14" />
  <path d="M17 17a2 2 0 0 1 -2 -2v-8h-5a2 2 0 0 0 -2 2" />
  <path d="M7 17a2.775 2.775 0 0 0 2.632 -1.897l.368 -1.103a13.4 13.4 0 0 1 3.236 -5.236l1.764 -1.764" />
  <path d="M10 14h5" />
    </svg>
  )
);

TypefaceOutlineLogo.displayName = "TypefaceOutlineLogo";

export const TypefaceOutlineLogoMetadata = {
  id: "typeface-outline",
  baseId: "typeface-outline",
  variant: "default",
  name: "Typeface Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TypefaceOutlineLogo;
