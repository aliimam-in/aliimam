/**
 * Auto-generated logo component: Texture Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextureOutlineLogo = React.forwardRef<SVGSVGElement, TextureOutlineLogoProps>(
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
      <path d="M6 3l-3 3" />
  <path d="M21 18l-3 3" />
  <path d="M11 3l-8 8" />
  <path d="M16 3l-13 13" />
  <path d="M21 3l-18 18" />
  <path d="M21 8l-13 13" />
  <path d="M21 13l-8 8" />
    </svg>
  )
);

TextureOutlineLogo.displayName = "TextureOutlineLogo";

export const TextureOutlineLogoMetadata = {
  id: "texture-outline",
  baseId: "texture-outline",
  variant: "default",
  name: "Texture Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextureOutlineLogo;
