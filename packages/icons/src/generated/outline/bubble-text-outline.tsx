/**
 * Auto-generated logo component: Bubble Text Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BubbleTextOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BubbleTextOutlineLogo = React.forwardRef<SVGSVGElement, BubbleTextOutlineLogoProps>(
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
      <path d="M7 10h10" />
  <path d="M9 14h5" />
  <path d="M12.4 3a5.34 5.34 0 0 1 4.906 3.239a5.333 5.333 0 0 1 -1.195 10.6a4.26 4.26 0 0 1 -5.28 1.863l-3.831 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.33 5.33 0 0 1 4.287 -2.16" />
    </svg>
  )
);

BubbleTextOutlineLogo.displayName = "BubbleTextOutlineLogo";

export const BubbleTextOutlineLogoMetadata = {
  id: "bubble-text-outline",
  baseId: "bubble-text-outline",
  variant: "default",
  name: "Bubble Text Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BubbleTextOutlineLogo;
