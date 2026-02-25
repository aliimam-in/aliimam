/**
 * Auto-generated logo component: Box Multiple 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxMultiple3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxMultiple3OutlineLogo = React.forwardRef<SVGSVGElement, BoxMultiple3OutlineLogoProps>(
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
  <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
  <path d="M14 10a2 2 0 1 0 -2 -2" />
  <path d="M12 12a2 2 0 1 0 2 -2" />
    </svg>
  )
);

BoxMultiple3OutlineLogo.displayName = "BoxMultiple3OutlineLogo";

export const BoxMultiple3OutlineLogoMetadata = {
  id: "box-multiple-3-outline",
  baseId: "box-multiple-3-outline",
  variant: "default",
  name: "Box Multiple 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxMultiple3OutlineLogo;
