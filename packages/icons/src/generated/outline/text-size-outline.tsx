/**
 * Auto-generated logo component: Text Size Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextSizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextSizeOutlineLogo = React.forwardRef<SVGSVGElement, TextSizeOutlineLogoProps>(
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
      <path d="M3 7v-2h13v2" />
  <path d="M10 5v14" />
  <path d="M12 19h-4" />
  <path d="M15 13v-1h6v1" />
  <path d="M18 12v7" />
  <path d="M17 19h2" />
    </svg>
  )
);

TextSizeOutlineLogo.displayName = "TextSizeOutlineLogo";

export const TextSizeOutlineLogoMetadata = {
  id: "text-size-outline",
  baseId: "text-size-outline",
  variant: "default",
  name: "Text Size Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextSizeOutlineLogo;
