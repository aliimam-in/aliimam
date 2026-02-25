/**
 * Auto-generated logo component: Zip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZipOutlineLogo = React.forwardRef<SVGSVGElement, ZipOutlineLogoProps>(
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
      <path d="M16 16v-8h2a2 2 0 1 1 0 4h-2" />
  <path d="M12 8v8" />
  <path d="M4 8h4l-4 8h4" />
    </svg>
  )
);

ZipOutlineLogo.displayName = "ZipOutlineLogo";

export const ZipOutlineLogoMetadata = {
  id: "zip-outline",
  baseId: "zip-outline",
  variant: "default",
  name: "Zip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZipOutlineLogo;
