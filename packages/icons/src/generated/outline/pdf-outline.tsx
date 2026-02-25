/**
 * Auto-generated logo component: Pdf Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PdfOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PdfOutlineLogo = React.forwardRef<SVGSVGElement, PdfOutlineLogoProps>(
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
      <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
  <path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
  <path d="M17 12h3" />
  <path d="M21 8h-4v8" />
    </svg>
  )
);

PdfOutlineLogo.displayName = "PdfOutlineLogo";

export const PdfOutlineLogoMetadata = {
  id: "pdf-outline",
  baseId: "pdf-outline",
  variant: "default",
  name: "Pdf Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PdfOutlineLogo;
