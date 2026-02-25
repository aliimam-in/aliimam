/**
 * Auto-generated logo component: Text Scan 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TextScan2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TextScan2OutlineLogo = React.forwardRef<SVGSVGElement, TextScan2OutlineLogoProps>(
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <path d="M8 12h8" />
  <path d="M8 9h6" />
  <path d="M8 15h4" />
    </svg>
  )
);

TextScan2OutlineLogo.displayName = "TextScan2OutlineLogo";

export const TextScan2OutlineLogoMetadata = {
  id: "text-scan-2-outline",
  baseId: "text-scan-2-outline",
  variant: "default",
  name: "Text Scan 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TextScan2OutlineLogo;
