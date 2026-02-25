/**
 * Auto-generated logo component: Prism Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrismOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PrismOutlineLogo = React.forwardRef<SVGSVGElement, PrismOutlineLogoProps>(
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
      <path d="M12 9v13" />
  <path d="M19 17.17l-5.98 4.485a1.7 1.7 0 0 1 -2.04 0l-5.98 -4.485a2.5 2.5 0 0 1 -1 -2v-11.17a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v11.17a2.5 2.5 0 0 1 -1 2" />
  <path d="M4.3 3.3l6.655 5.186a1.7 1.7 0 0 0 2.09 0l6.655 -5.186" />
    </svg>
  )
);

PrismOutlineLogo.displayName = "PrismOutlineLogo";

export const PrismOutlineLogoMetadata = {
  id: "prism-outline",
  baseId: "prism-outline",
  variant: "default",
  name: "Prism Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PrismOutlineLogo;
