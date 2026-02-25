/**
 * Auto-generated logo component: Json Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JsonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JsonOutlineLogo = React.forwardRef<SVGSVGElement, JsonOutlineLogoProps>(
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
      <path d="M20 16v-8l3 8v-8" />
  <path d="M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
  <path d="M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5" />
  <path d="M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1" />
    </svg>
  )
);

JsonOutlineLogo.displayName = "JsonOutlineLogo";

export const JsonOutlineLogoMetadata = {
  id: "json-outline",
  baseId: "json-outline",
  variant: "default",
  name: "Json Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JsonOutlineLogo;
