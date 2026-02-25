/**
 * Auto-generated logo component: Circle Caret Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleCaretUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleCaretUpOutlineLogo = React.forwardRef<SVGSVGElement, CircleCaretUpOutlineLogoProps>(
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
      <path d="M12 9l4 4h-8l4 -4" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

CircleCaretUpOutlineLogo.displayName = "CircleCaretUpOutlineLogo";

export const CircleCaretUpOutlineLogoMetadata = {
  id: "circle-caret-up-outline",
  baseId: "circle-caret-up-outline",
  variant: "default",
  name: "Circle Caret Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleCaretUpOutlineLogo;
