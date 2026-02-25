/**
 * Auto-generated logo component: Emphasis Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EmphasisOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EmphasisOutlineLogo = React.forwardRef<SVGSVGElement, EmphasisOutlineLogoProps>(
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
      <path d="M16 5h-8v10h8m-1 -5h-7" />
  <path d="M6 20l0 .01" />
  <path d="M10 20l0 .01" />
  <path d="M14 20l0 .01" />
  <path d="M18 20l0 .01" />
    </svg>
  )
);

EmphasisOutlineLogo.displayName = "EmphasisOutlineLogo";

export const EmphasisOutlineLogoMetadata = {
  id: "emphasis-outline",
  baseId: "emphasis-outline",
  variant: "default",
  name: "Emphasis Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EmphasisOutlineLogo;
