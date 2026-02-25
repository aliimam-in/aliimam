/**
 * Auto-generated logo component: Text Direction Ltr Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextDirectionLtrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextDirectionLtrOutlineLogo = React.forwardRef<SVGSVGElement, TextDirectionLtrOutlineLogoProps>(
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
      <path d="M5 19h14" />
  <path d="M17 21l2 -2l-2 -2" />
  <path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" />
  <path d="M14 15v-11" />
  <path d="M10 15v-11" />
    </svg>
  )
);

TextDirectionLtrOutlineLogo.displayName = "TextDirectionLtrOutlineLogo";

export const TextDirectionLtrOutlineLogoMetadata = {
  id: "text-direction-ltr-outline",
  baseId: "text-direction-ltr-outline",
  variant: "default",
  name: "Text Direction Ltr Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextDirectionLtrOutlineLogo;
