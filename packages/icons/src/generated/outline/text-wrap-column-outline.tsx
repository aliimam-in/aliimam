/**
 * Auto-generated logo component: Text Wrap Column Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextWrapColumnOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextWrapColumnOutlineLogo = React.forwardRef<SVGSVGElement, TextWrapColumnOutlineLogoProps>(
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
      <path d="M7 9h7a3 3 0 0 1 0 6h-4l2 -2" />
  <path d="M12 17l-2 -2" />
  <path d="M3 3v18" />
  <path d="M21 3v18" />
    </svg>
  )
);

TextWrapColumnOutlineLogo.displayName = "TextWrapColumnOutlineLogo";

export const TextWrapColumnOutlineLogoMetadata = {
  id: "text-wrap-column-outline",
  baseId: "text-wrap-column-outline",
  variant: "default",
  name: "Text Wrap Column Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextWrapColumnOutlineLogo;
