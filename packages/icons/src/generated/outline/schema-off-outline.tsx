/**
 * Auto-generated logo component: Schema Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SchemaOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SchemaOffOutlineLogo = React.forwardRef<SVGSVGElement, SchemaOffOutlineLogoProps>(
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
      <path d="M6 2h4v4m-4 0h-1v-1" />
  <path d="M15 11v-1h5v4h-2" />
  <path d="M5 18h5v4h-5l0 -4" />
  <path d="M5 10h5v4h-5l0 -4" />
  <path d="M10 12h2" />
  <path d="M7.5 7.5v2.5" />
  <path d="M7.5 14v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SchemaOffOutlineLogo.displayName = "SchemaOffOutlineLogo";

export const SchemaOffOutlineLogoMetadata = {
  id: "schema-off-outline",
  baseId: "schema-off-outline",
  variant: "default",
  name: "Schema Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SchemaOffOutlineLogo;
