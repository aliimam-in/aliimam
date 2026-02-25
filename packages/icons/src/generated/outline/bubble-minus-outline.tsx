/**
 * Auto-generated logo component: Bubble Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BubbleMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BubbleMinusOutlineLogo = React.forwardRef<SVGSVGElement, BubbleMinusOutlineLogoProps>(
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
      <path d="M12.4 19a4.2 4.2 0 0 1 -1.57 -.298l-3.83 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.335 5.335 0 0 1 9.194 1.078a5.333 5.333 0 0 1 3.404 8.771" />
  <path d="M16 19h6" />
    </svg>
  )
);

BubbleMinusOutlineLogo.displayName = "BubbleMinusOutlineLogo";

export const BubbleMinusOutlineLogoMetadata = {
  id: "bubble-minus-outline",
  baseId: "bubble-minus-outline",
  variant: "default",
  name: "Bubble Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BubbleMinusOutlineLogo;
