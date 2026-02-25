/**
 * Auto-generated logo component: Text Align End (default)
 * Category: text
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextAlignEndLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextAlignEndLogo = React.forwardRef<SVGSVGElement, TextAlignEndLogoProps>(
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
  <path d="M21 12H9" />
  <path d="M21 19H7" />
    </svg>
  )
);

TextAlignEndLogo.displayName = "TextAlignEndLogo";

export const TextAlignEndLogoMetadata = {
  id: "text-align-end",
  baseId: "text-align-end",
  variant: "default",
  name: "Text Align End",
  category: "text",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextAlignEndLogo;
