/**
 * Auto-generated logo component: Csv Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CsvOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CsvOutlineLogo = React.forwardRef<SVGSVGElement, CsvOutlineLogoProps>(
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
      <path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
  <path d="M17 8l2 8l2 -8" />
  <path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
    </svg>
  )
);

CsvOutlineLogo.displayName = "CsvOutlineLogo";

export const CsvOutlineLogoMetadata = {
  id: "csv-outline",
  baseId: "csv-outline",
  variant: "default",
  name: "Csv Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CsvOutlineLogo;
