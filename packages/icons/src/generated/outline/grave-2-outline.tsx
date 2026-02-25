/**
 * Auto-generated logo component: Grave 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Grave2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Grave2OutlineLogo = React.forwardRef<SVGSVGElement, Grave2OutlineLogoProps>(
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
      <path d="M7 16.17v-9.17a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v9.171" />
  <path d="M12 7v5" />
  <path d="M10 9h4" />
  <path d="M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14" />
    </svg>
  )
);

Grave2OutlineLogo.displayName = "Grave2OutlineLogo";

export const Grave2OutlineLogoMetadata = {
  id: "grave-2-outline",
  baseId: "grave-2-outline",
  variant: "default",
  name: "Grave 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Grave2OutlineLogo;
