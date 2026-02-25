/**
 * Auto-generated logo component: Curly Loop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurlyLoopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurlyLoopOutlineLogo = React.forwardRef<SVGSVGElement, CurlyLoopOutlineLogoProps>(
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
      <path d="M21 8c-4 0 -7 2 -7 5a3 3 0 0 0 6 0c0 -3 -2.5 -5 -8 -5s-8 2 -8 5a3 3 0 0 0 6 0c0 -3 -3 -5 -7 -5" />
    </svg>
  )
);

CurlyLoopOutlineLogo.displayName = "CurlyLoopOutlineLogo";

export const CurlyLoopOutlineLogoMetadata = {
  id: "curly-loop-outline",
  baseId: "curly-loop-outline",
  variant: "default",
  name: "Curly Loop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurlyLoopOutlineLogo;
