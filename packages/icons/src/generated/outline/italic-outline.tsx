/**
 * Auto-generated logo component: Italic Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ItalicOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ItalicOutlineLogo = React.forwardRef<SVGSVGElement, ItalicOutlineLogoProps>(
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
      <path d="M11 5l6 0" />
  <path d="M7 19l6 0" />
  <path d="M14 5l-4 14" />
    </svg>
  )
);

ItalicOutlineLogo.displayName = "ItalicOutlineLogo";

export const ItalicOutlineLogoMetadata = {
  id: "italic-outline",
  baseId: "italic-outline",
  variant: "default",
  name: "Italic Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ItalicOutlineLogo;
