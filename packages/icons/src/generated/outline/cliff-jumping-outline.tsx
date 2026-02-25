/**
 * Auto-generated logo component: Cliff Jumping Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CliffJumpingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CliffJumpingOutlineLogo = React.forwardRef<SVGSVGElement, CliffJumpingOutlineLogoProps>(
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
      <path d="M14 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M10.5 18l2.5 2l2 -2" />
  <path d="M18 21l3 -3l-4 -2l-1 -5" />
  <path d="M10.5 7.5l2 3l3.5 .5l3 -2l.5 -3" />
  <path d="M4 21v-1l2 -3l.5 -2.5l1.5 -2.5l-1 -5l1 -3l-1 -1l-2 .5l-2 -.5" />
    </svg>
  )
);

CliffJumpingOutlineLogo.displayName = "CliffJumpingOutlineLogo";

export const CliffJumpingOutlineLogoMetadata = {
  id: "cliff-jumping-outline",
  baseId: "cliff-jumping-outline",
  variant: "default",
  name: "Cliff Jumping Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CliffJumpingOutlineLogo;
