/**
 * Auto-generated logo component: Flip Flops Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlipFlopsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlipFlopsOutlineLogo = React.forwardRef<SVGSVGElement, FlipFlopsOutlineLogoProps>(
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
      <path d="M18 4c2.21 0 4 1.682 4 3.758c0 .078 0 .156 -.008 .234l-.6 9.014c-.11 1.683 -1.596 3 -3.392 3s-3.28 -1.311 -3.392 -3l-.6 -9.014c-.138 -2.071 1.538 -3.855 3.743 -3.985a4.15 4.15 0 0 1 .25 -.007l-.001 0" />
  <path d="M14.5 14c1 -3.333 2.167 -5 3.5 -5c1.333 0 2.5 1.667 3.5 5" />
  <path d="M18 16v1" />
  <path d="M6 4c2.21 0 4 1.682 4 3.758c0 .078 0 .156 -.008 .234l-.6 9.014c-.11 1.683 -1.596 3 -3.392 3s-3.28 -1.311 -3.392 -3l-.6 -9.014c-.138 -2.071 1.538 -3.855 3.742 -3.985c.084 0 .167 -.007 .25 -.007" />
  <path d="M2.5 14c1 -3.333 2.167 -5 3.5 -5c1.333 0 2.5 1.667 3.5 5" />
  <path d="M6 16v1" />
    </svg>
  )
);

FlipFlopsOutlineLogo.displayName = "FlipFlopsOutlineLogo";

export const FlipFlopsOutlineLogoMetadata = {
  id: "flip-flops-outline",
  baseId: "flip-flops-outline",
  variant: "default",
  name: "Flip Flops Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlipFlopsOutlineLogo;
