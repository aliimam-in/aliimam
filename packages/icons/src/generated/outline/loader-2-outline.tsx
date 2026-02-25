/**
 * Auto-generated logo component: Loader 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Loader2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Loader2OutlineLogo = React.forwardRef<SVGSVGElement, Loader2OutlineLogoProps>(
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
      <path d="M12 3a9 9 0 1 0 9 9" />
    </svg>
  )
);

Loader2OutlineLogo.displayName = "Loader2OutlineLogo";

export const Loader2OutlineLogoMetadata = {
  id: "loader-2-outline",
  baseId: "loader-2-outline",
  variant: "default",
  name: "Loader 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Loader2OutlineLogo;
