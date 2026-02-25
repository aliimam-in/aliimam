/**
 * Auto-generated logo component: Square Plus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquarePlus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquarePlus2OutlineLogo = React.forwardRef<SVGSVGElement, SquarePlus2OutlineLogoProps>(
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
      <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

SquarePlus2OutlineLogo.displayName = "SquarePlus2OutlineLogo";

export const SquarePlus2OutlineLogoMetadata = {
  id: "square-plus-2-outline",
  baseId: "square-plus-2-outline",
  variant: "default",
  name: "Square Plus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquarePlus2OutlineLogo;
