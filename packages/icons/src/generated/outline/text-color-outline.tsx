/**
 * Auto-generated logo component: Text Color Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextColorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextColorOutlineLogo = React.forwardRef<SVGSVGElement, TextColorOutlineLogoProps>(
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
      <path d="M9 15v-7a3 3 0 0 1 6 0v7" />
  <path d="M9 11h6" />
  <path d="M5 19h14" />
    </svg>
  )
);

TextColorOutlineLogo.displayName = "TextColorOutlineLogo";

export const TextColorOutlineLogoMetadata = {
  id: "text-color-outline",
  baseId: "text-color-outline",
  variant: "default",
  name: "Text Color Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextColorOutlineLogo;
