/**
 * Auto-generated logo component: Paper Bag Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PaperBagOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PaperBagOffOutlineLogo = React.forwardRef<SVGSVGElement, PaperBagOffOutlineLogoProps>(
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
      <path d="M7.158 3.185c.256 -.119 .542 -.185 .842 -.185h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v2.82m-.177 3.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-2" />
  <path d="M13.185 13.173a2 2 0 1 0 2.64 2.647" />
  <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
  <path d="M11 7h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PaperBagOffOutlineLogo.displayName = "PaperBagOffOutlineLogo";

export const PaperBagOffOutlineLogoMetadata = {
  id: "paper-bag-off-outline",
  baseId: "paper-bag-off-outline",
  variant: "default",
  name: "Paper Bag Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PaperBagOffOutlineLogo;
