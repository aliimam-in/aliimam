/**
 * Auto-generated logo component: Ironing 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ironing3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ironing3OutlineLogo = React.forwardRef<SVGSVGElement, Ironing3OutlineLogoProps>(
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
      <path d="M12 15h.01" />
  <path d="M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8" />
  <path d="M9 15h.01" />
  <path d="M15 15h.01" />
    </svg>
  )
);

Ironing3OutlineLogo.displayName = "Ironing3OutlineLogo";

export const Ironing3OutlineLogoMetadata = {
  id: "ironing-3-outline",
  baseId: "ironing-3-outline",
  variant: "default",
  name: "Ironing 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ironing3OutlineLogo;
