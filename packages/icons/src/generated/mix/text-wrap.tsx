/**
 * Auto-generated logo component: Text Wrap (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextWrapLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextWrapLogo = React.forwardRef<SVGSVGElement, TextWrapLogoProps>(
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
      <path d="m16 16-3 3 3 3" />
  <path d="M3 12h14.5a1 1 0 0 1 0 7H13" />
  <path d="M3 19h6" />
  <path d="M3 5h18" />
    </svg>
  )
);

TextWrapLogo.displayName = "TextWrapLogo";

export const TextWrapLogoMetadata = {
  id: "text-wrap",
  baseId: "text-wrap",
  variant: "default",
  name: "Text Wrap",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextWrapLogo;
