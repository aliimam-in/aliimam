/**
 * Auto-generated logo component: Text Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextPlusOutlineLogo = React.forwardRef<SVGSVGElement, TextPlusOutlineLogoProps>(
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
      <path d="M19 10h-14" />
  <path d="M5 6h14" />
  <path d="M14 14h-9" />
  <path d="M5 18h6" />
  <path d="M18 15v6" />
  <path d="M15 18h6" />
    </svg>
  )
);

TextPlusOutlineLogo.displayName = "TextPlusOutlineLogo";

export const TextPlusOutlineLogoMetadata = {
  id: "text-plus-outline",
  baseId: "text-plus-outline",
  variant: "default",
  name: "Text Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextPlusOutlineLogo;
