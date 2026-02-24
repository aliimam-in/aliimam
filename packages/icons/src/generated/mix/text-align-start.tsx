/**
 * Auto-generated logo component: Text Align Start (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextAlignStartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextAlignStartLogo = React.forwardRef<SVGSVGElement, TextAlignStartLogoProps>(
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
      <path d="M21 5H3" />
  <path d="M15 12H3" />
  <path d="M17 19H3" />
    </svg>
  )
);

TextAlignStartLogo.displayName = "TextAlignStartLogo";

export const TextAlignStartLogoMetadata = {
  id: "text-align-start",
  baseId: "text-align-start",
  variant: "default",
  name: "Text Align Start",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextAlignStartLogo;
