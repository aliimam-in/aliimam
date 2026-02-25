/**
 * Auto-generated logo component: Text Wrap Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextWrapOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextWrapOutlineLogo = React.forwardRef<SVGSVGElement, TextWrapOutlineLogoProps>(
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
      <path d="M4 6l16 0" />
  <path d="M4 18l5 0" />
  <path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" />
    </svg>
  )
);

TextWrapOutlineLogo.displayName = "TextWrapOutlineLogo";

export const TextWrapOutlineLogoMetadata = {
  id: "text-wrap-outline",
  baseId: "text-wrap-outline",
  variant: "default",
  name: "Text Wrap Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextWrapOutlineLogo;
