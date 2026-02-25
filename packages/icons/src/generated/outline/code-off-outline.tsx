/**
 * Auto-generated logo component: Code Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeOffOutlineLogo = React.forwardRef<SVGSVGElement, CodeOffOutlineLogoProps>(
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
      <path d="M7 8l-4 4l4 4" />
  <path d="M17 8l4 4l-2.5 2.5" />
  <path d="M14 4l-1.201 4.805m-.802 3.207l-2 7.988" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CodeOffOutlineLogo.displayName = "CodeOffOutlineLogo";

export const CodeOffOutlineLogoMetadata = {
  id: "code-off-outline",
  baseId: "code-off-outline",
  variant: "default",
  name: "Code Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeOffOutlineLogo;
