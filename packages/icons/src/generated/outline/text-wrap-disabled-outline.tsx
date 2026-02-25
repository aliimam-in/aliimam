/**
 * Auto-generated logo component: Text Wrap Disabled Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextWrapDisabledOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextWrapDisabledOutlineLogo = React.forwardRef<SVGSVGElement, TextWrapDisabledOutlineLogoProps>(
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
      <path d="M4 6l10 0" />
  <path d="M4 18l10 0" />
  <path d="M4 12h17l-3 -3m0 6l3 -3" />
    </svg>
  )
);

TextWrapDisabledOutlineLogo.displayName = "TextWrapDisabledOutlineLogo";

export const TextWrapDisabledOutlineLogoMetadata = {
  id: "text-wrap-disabled-outline",
  baseId: "text-wrap-disabled-outline",
  variant: "default",
  name: "Text Wrap Disabled Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextWrapDisabledOutlineLogo;
