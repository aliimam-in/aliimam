/**
 * Auto-generated logo component: Text Align Justify (default)
 * Category: text
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextAlignJustifyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextAlignJustifyLogo = React.forwardRef<SVGSVGElement, TextAlignJustifyLogoProps>(
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
      <path d="M3 5h18" />
  <path d="M3 12h18" />
  <path d="M3 19h18" />
    </svg>
  )
);

TextAlignJustifyLogo.displayName = "TextAlignJustifyLogo";

export const TextAlignJustifyLogoMetadata = {
  id: "text-align-justify",
  baseId: "text-align-justify",
  variant: "default",
  name: "Text Align Justify",
  category: "text",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextAlignJustifyLogo;
