/**
 * Auto-generated logo component: Id Badge 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IdBadge2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IdBadge2OutlineLogo = React.forwardRef<SVGSVGElement, IdBadge2OutlineLogoProps>(
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
      <path d="M7 12h3v4h-3l0 -4" />
  <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
  <path d="M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3" />
  <path d="M14 16h2" />
  <path d="M14 12h4" />
    </svg>
  )
);

IdBadge2OutlineLogo.displayName = "IdBadge2OutlineLogo";

export const IdBadge2OutlineLogoMetadata = {
  id: "id-badge-2-outline",
  baseId: "id-badge-2-outline",
  variant: "default",
  name: "Id Badge 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IdBadge2OutlineLogo;
