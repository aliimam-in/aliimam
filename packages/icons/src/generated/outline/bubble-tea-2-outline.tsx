/**
 * Auto-generated logo component: Bubble Tea 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BubbleTea2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BubbleTea2OutlineLogo = React.forwardRef<SVGSVGElement, BubbleTea2OutlineLogoProps>(
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
      <path d="M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689" />
  <path d="M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286" />
  <path d="M5 9h14" />
  <path d="M12 9l4 -7" />
  <path d="M7 14c.593 .642 1.484 1.017 2.5 1c1.016 .017 1.907 -.358 2.5 -1s1.484 -1.017 2.5 -1c1.016 -.017 1.907 .358 2.5 1" />
    </svg>
  )
);

BubbleTea2OutlineLogo.displayName = "BubbleTea2OutlineLogo";

export const BubbleTea2OutlineLogoMetadata = {
  id: "bubble-tea-2-outline",
  baseId: "bubble-tea-2-outline",
  variant: "default",
  name: "Bubble Tea 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BubbleTea2OutlineLogo;
