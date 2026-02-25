/**
 * Auto-generated logo component: Nut Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NutOutlineLogo = React.forwardRef<SVGSVGElement, NutOutlineLogoProps>(
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
      <path d="M19 6.84a2.007 2.007 0 0 1 1 1.754v6.555c0 .728 -.394 1.4 -1.03 1.753l-6 3.844a1.995 1.995 0 0 1 -1.94 0l-6 -3.844a2.006 2.006 0 0 1 -1.03 -1.752v-6.557c0 -.728 .394 -1.399 1.03 -1.753l6 -3.582a2.049 2.049 0 0 1 2 0l6 3.582h-.03" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

NutOutlineLogo.displayName = "NutOutlineLogo";

export const NutOutlineLogoMetadata = {
  id: "nut-outline",
  baseId: "nut-outline",
  variant: "default",
  name: "Nut Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NutOutlineLogo;
