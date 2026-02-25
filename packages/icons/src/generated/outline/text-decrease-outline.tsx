/**
 * Auto-generated logo component: Text Decrease Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextDecreaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextDecreaseOutlineLogo = React.forwardRef<SVGSVGElement, TextDecreaseOutlineLogoProps>(
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
      <path d="M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5" />
  <path d="M4 13h7" />
  <path d="M21 12h-6" />
    </svg>
  )
);

TextDecreaseOutlineLogo.displayName = "TextDecreaseOutlineLogo";

export const TextDecreaseOutlineLogoMetadata = {
  id: "text-decrease-outline",
  baseId: "text-decrease-outline",
  variant: "default",
  name: "Text Decrease Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextDecreaseOutlineLogo;
