/**
 * Auto-generated logo component: Box Multiple 8 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxMultiple8OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxMultiple8OutlineLogo = React.forwardRef<SVGSVGElement, BoxMultiple8OutlineLogoProps>(
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
  <path d="M12 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
    </svg>
  )
);

BoxMultiple8OutlineLogo.displayName = "BoxMultiple8OutlineLogo";

export const BoxMultiple8OutlineLogoMetadata = {
  id: "box-multiple-8-outline",
  baseId: "box-multiple-8-outline",
  variant: "default",
  name: "Box Multiple 8 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxMultiple8OutlineLogo;
