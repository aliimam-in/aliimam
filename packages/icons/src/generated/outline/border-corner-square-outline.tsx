/**
 * Auto-generated logo component: Border Corner Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderCornerSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderCornerSquareOutlineLogo = React.forwardRef<SVGSVGElement, BorderCornerSquareOutlineLogoProps>(
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
      <path d="M4 20v-15a1 1 0 0 1 1 -1h15" />
    </svg>
  )
);

BorderCornerSquareOutlineLogo.displayName = "BorderCornerSquareOutlineLogo";

export const BorderCornerSquareOutlineLogoMetadata = {
  id: "border-corner-square-outline",
  baseId: "border-corner-square-outline",
  variant: "default",
  name: "Border Corner Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderCornerSquareOutlineLogo;
