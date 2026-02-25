/**
 * Auto-generated logo component: Text Orientation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextOrientationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextOrientationOutlineLogo = React.forwardRef<SVGSVGElement, TextOrientationOutlineLogoProps>(
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
      <path d="M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5" />
  <path d="M5.5 11.5l5 -5" />
  <path d="M21 12l-9 9" />
  <path d="M21 12v4" />
  <path d="M21 12h-4" />
    </svg>
  )
);

TextOrientationOutlineLogo.displayName = "TextOrientationOutlineLogo";

export const TextOrientationOutlineLogoMetadata = {
  id: "text-orientation-outline",
  baseId: "text-orientation-outline",
  variant: "default",
  name: "Text Orientation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextOrientationOutlineLogo;
