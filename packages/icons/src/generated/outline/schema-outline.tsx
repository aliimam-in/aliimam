/**
 * Auto-generated logo component: Schema Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SchemaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SchemaOutlineLogo = React.forwardRef<SVGSVGElement, SchemaOutlineLogoProps>(
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
      <path d="M5 2h5v4h-5l0 -4" />
  <path d="M15 10h5v4h-5l0 -4" />
  <path d="M5 18h5v4h-5l0 -4" />
  <path d="M5 10h5v4h-5l0 -4" />
  <path d="M10 12h5" />
  <path d="M7.5 6v4" />
  <path d="M7.5 14v4" />
    </svg>
  )
);

SchemaOutlineLogo.displayName = "SchemaOutlineLogo";

export const SchemaOutlineLogoMetadata = {
  id: "schema-outline",
  baseId: "schema-outline",
  variant: "default",
  name: "Schema Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SchemaOutlineLogo;
