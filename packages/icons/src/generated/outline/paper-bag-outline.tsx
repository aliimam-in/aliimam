/**
 * Auto-generated logo component: Paper Bag Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PaperBagOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PaperBagOutlineLogo = React.forwardRef<SVGSVGElement, PaperBagOutlineLogoProps>(
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
      <path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2" />
  <path d="M12 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
  <path d="M11 7h2" />
    </svg>
  )
);

PaperBagOutlineLogo.displayName = "PaperBagOutlineLogo";

export const PaperBagOutlineLogoMetadata = {
  id: "paper-bag-outline",
  baseId: "paper-bag-outline",
  variant: "default",
  name: "Paper Bag Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PaperBagOutlineLogo;
