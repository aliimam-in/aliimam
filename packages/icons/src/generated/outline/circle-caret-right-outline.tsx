/**
 * Auto-generated logo component: Circle Caret Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleCaretRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleCaretRightOutlineLogo = React.forwardRef<SVGSVGElement, CircleCaretRightOutlineLogoProps>(
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
      <path d="M15 12l-4 -4v8l4 -4" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

CircleCaretRightOutlineLogo.displayName = "CircleCaretRightOutlineLogo";

export const CircleCaretRightOutlineLogoMetadata = {
  id: "circle-caret-right-outline",
  baseId: "circle-caret-right-outline",
  variant: "default",
  name: "Circle Caret Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleCaretRightOutlineLogo;
