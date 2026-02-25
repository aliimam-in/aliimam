/**
 * Auto-generated logo component: Box Multiple 5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxMultiple5OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxMultiple5OutlineLogo = React.forwardRef<SVGSVGElement, BoxMultiple5OutlineLogoProps>(
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
      <path d="M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10" />
  <path d="M12 14h2a2 2 0 1 0 0 -4h-2v-4h4" />
  <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
    </svg>
  )
);

BoxMultiple5OutlineLogo.displayName = "BoxMultiple5OutlineLogo";

export const BoxMultiple5OutlineLogoMetadata = {
  id: "box-multiple-5-outline",
  baseId: "box-multiple-5-outline",
  variant: "default",
  name: "Box Multiple 5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxMultiple5OutlineLogo;
