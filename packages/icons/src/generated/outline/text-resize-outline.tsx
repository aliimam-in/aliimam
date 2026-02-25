/**
 * Auto-generated logo component: Text Resize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextResizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextResizeOutlineLogo = React.forwardRef<SVGSVGElement, TextResizeOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 7v10" />
  <path d="M7 5h10" />
  <path d="M7 19h10" />
  <path d="M19 7v10" />
  <path d="M10 10h4" />
  <path d="M12 14v-4" />
    </svg>
  )
);

TextResizeOutlineLogo.displayName = "TextResizeOutlineLogo";

export const TextResizeOutlineLogoMetadata = {
  id: "text-resize-outline",
  baseId: "text-resize-outline",
  variant: "default",
  name: "Text Resize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextResizeOutlineLogo;
