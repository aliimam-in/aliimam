/**
 * Auto-generated logo component: Code Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeCircleOutlineLogo = React.forwardRef<SVGSVGElement, CodeCircleOutlineLogoProps>(
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
      <path d="M10 14l-2 -2l2 -2" />
  <path d="M14 10l2 2l-2 2" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

CodeCircleOutlineLogo.displayName = "CodeCircleOutlineLogo";

export const CodeCircleOutlineLogoMetadata = {
  id: "code-circle-outline",
  baseId: "code-circle-outline",
  variant: "default",
  name: "Code Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeCircleOutlineLogo;
