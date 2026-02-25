/**
 * Auto-generated logo component: Uv Index Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UvIndexOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UvIndexOutlineLogo = React.forwardRef<SVGSVGElement, UvIndexOutlineLogoProps>(
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
      <path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" />
  <path d="M12 4v-1" />
  <path d="M13 16l2 5h1l2 -5" />
  <path d="M6 16v3a2 2 0 1 0 4 0v-3" />
    </svg>
  )
);

UvIndexOutlineLogo.displayName = "UvIndexOutlineLogo";

export const UvIndexOutlineLogoMetadata = {
  id: "uv-index-outline",
  baseId: "uv-index-outline",
  variant: "default",
  name: "Uv Index Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UvIndexOutlineLogo;
