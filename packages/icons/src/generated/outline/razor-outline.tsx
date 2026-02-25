/**
 * Auto-generated logo component: Razor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RazorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RazorOutlineLogo = React.forwardRef<SVGSVGElement, RazorOutlineLogoProps>(
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
      <path d="M7 3h10v4h-10l0 -4" />
  <path d="M12 7v4" />
  <path d="M12 11a2 2 0 0 1 2 2v6a2 2 0 1 1 -4 0v-6a2 2 0 0 1 2 -2" />
    </svg>
  )
);

RazorOutlineLogo.displayName = "RazorOutlineLogo";

export const RazorOutlineLogoMetadata = {
  id: "razor-outline",
  baseId: "razor-outline",
  variant: "default",
  name: "Razor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RazorOutlineLogo;
