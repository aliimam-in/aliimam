/**
 * Auto-generated logo component: A B Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ABOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ABOutlineLogo = React.forwardRef<SVGSVGElement, ABOutlineLogoProps>(
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
      <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
  <path d="M12 6l0 12" />
  <path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
    </svg>
  )
);

ABOutlineLogo.displayName = "ABOutlineLogo";

export const ABOutlineLogoMetadata = {
  id: "a-b-outline",
  baseId: "a-b-outline",
  variant: "default",
  name: "A B Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ABOutlineLogo;
