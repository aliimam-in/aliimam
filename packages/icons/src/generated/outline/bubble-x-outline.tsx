/**
 * Auto-generated logo component: Bubble X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BubbleXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BubbleXOutlineLogo = React.forwardRef<SVGSVGElement, BubbleXOutlineLogoProps>(
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
      <path d="M13.5 18.75c-.345 .09 -.727 .25 -1.1 .25a4.3 4.3 0 0 1 -1.57 -.298l-3.83 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.335 5.335 0 0 1 9.194 1.078a5.333 5.333 0 0 1 4.484 6.778" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

BubbleXOutlineLogo.displayName = "BubbleXOutlineLogo";

export const BubbleXOutlineLogoMetadata = {
  id: "bubble-x-outline",
  baseId: "bubble-x-outline",
  variant: "default",
  name: "Bubble X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BubbleXOutlineLogo;
