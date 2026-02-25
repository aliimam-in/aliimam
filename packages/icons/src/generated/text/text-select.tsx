/**
 * Auto-generated logo component: Text Select (default)
 * Category: text
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextSelectLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextSelectLogo = React.forwardRef<SVGSVGElement, TextSelectLogoProps>(
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
      <path d="M14 21h1" />
  <path d="M14 3h1" />
  <path d="M19 3a2 2 0 0 1 2 2" />
  <path d="M21 14v1" />
  <path d="M21 19a2 2 0 0 1-2 2" />
  <path d="M21 9v1" />
  <path d="M3 14v1" />
  <path d="M3 9v1" />
  <path d="M5 21a2 2 0 0 1-2-2" />
  <path d="M5 3a2 2 0 0 0-2 2" />
  <path d="M7 12h10" />
  <path d="M7 16h6" />
  <path d="M7 8h8" />
  <path d="M9 21h1" />
  <path d="M9 3h1" />
    </svg>
  )
);

TextSelectLogo.displayName = "TextSelectLogo";

export const TextSelectLogoMetadata = {
  id: "text-select",
  baseId: "text-select",
  variant: "default",
  name: "Text Select",
  category: "text",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextSelectLogo;
