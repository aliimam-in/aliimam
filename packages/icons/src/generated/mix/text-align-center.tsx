/**
 * Auto-generated logo component: Text Align Center (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextAlignCenterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextAlignCenterLogo = React.forwardRef<SVGSVGElement, TextAlignCenterLogoProps>(
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
  <path d="M17 12H7" />
  <path d="M19 19H5" />
    </svg>
  )
);

TextAlignCenterLogo.displayName = "TextAlignCenterLogo";

export const TextAlignCenterLogoMetadata = {
  id: "text-align-center",
  baseId: "text-align-center",
  variant: "default",
  name: "Text Align Center",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextAlignCenterLogo;
