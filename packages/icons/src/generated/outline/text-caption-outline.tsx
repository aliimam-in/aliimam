/**
 * Auto-generated logo component: Text Caption Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextCaptionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextCaptionOutlineLogo = React.forwardRef<SVGSVGElement, TextCaptionOutlineLogoProps>(
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
      <path d="M4 15h16" />
  <path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M4 20h12" />
    </svg>
  )
);

TextCaptionOutlineLogo.displayName = "TextCaptionOutlineLogo";

export const TextCaptionOutlineLogoMetadata = {
  id: "text-caption-outline",
  baseId: "text-caption-outline",
  variant: "default",
  name: "Text Caption Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextCaptionOutlineLogo;
