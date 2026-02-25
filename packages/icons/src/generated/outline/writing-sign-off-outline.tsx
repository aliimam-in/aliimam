/**
 * Auto-generated logo component: Writing Sign Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WritingSignOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WritingSignOffOutlineLogo = React.forwardRef<SVGSVGElement, WritingSignOffOutlineLogoProps>(
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
      <path d="M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5" />
  <path d="M16 16v1l2 2l.5 -.5m1.5 -2.5v-11c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v7" />
  <path d="M16 7h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WritingSignOffOutlineLogo.displayName = "WritingSignOffOutlineLogo";

export const WritingSignOffOutlineLogoMetadata = {
  id: "writing-sign-off-outline",
  baseId: "writing-sign-off-outline",
  variant: "default",
  name: "Writing Sign Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WritingSignOffOutlineLogo;
