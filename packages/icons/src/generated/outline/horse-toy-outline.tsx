/**
 * Auto-generated logo component: Horse Toy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HorseToyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HorseToyOutlineLogo = React.forwardRef<SVGSVGElement, HorseToyOutlineLogoProps>(
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
      <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
  <path d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
  <path d="M5 18.5l2 -9.5" />
  <path d="M8 20l2 -5h4l2 5" />
    </svg>
  )
);

HorseToyOutlineLogo.displayName = "HorseToyOutlineLogo";

export const HorseToyOutlineLogoMetadata = {
  id: "horse-toy-outline",
  baseId: "horse-toy-outline",
  variant: "default",
  name: "Horse Toy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HorseToyOutlineLogo;
