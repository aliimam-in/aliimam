/**
 * Auto-generated logo component: Writing Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WritingOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WritingOffOutlineLogo = React.forwardRef<SVGSVGElement, WritingOffOutlineLogoProps>(
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
      <path d="M16 7h4" />
  <path d="M16 16v1l2 2l.5 -.5m1.5 -2.5v-11c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v7" />
  <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WritingOffOutlineLogo.displayName = "WritingOffOutlineLogo";

export const WritingOffOutlineLogoMetadata = {
  id: "writing-off-outline",
  baseId: "writing-off-outline",
  variant: "default",
  name: "Writing Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WritingOffOutlineLogo;
