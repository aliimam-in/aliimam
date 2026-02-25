/**
 * Auto-generated logo component: Text Increase Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextIncreaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextIncreaseOutlineLogo = React.forwardRef<SVGSVGElement, TextIncreaseOutlineLogoProps>(
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
  <path d="M18 9v6" />
  <path d="M21 12h-6" />
    </svg>
  )
);

TextIncreaseOutlineLogo.displayName = "TextIncreaseOutlineLogo";

export const TextIncreaseOutlineLogoMetadata = {
  id: "text-increase-outline",
  baseId: "text-increase-outline",
  variant: "default",
  name: "Text Increase Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextIncreaseOutlineLogo;
