/**
 * Auto-generated logo component: Code Dots Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeDotsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeDotsOutlineLogo = React.forwardRef<SVGSVGElement, CodeDotsOutlineLogoProps>(
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
      <path d="M15 12h.01" />
  <path d="M12 12h.01" />
  <path d="M9 12h.01" />
  <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
  <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
    </svg>
  )
);

CodeDotsOutlineLogo.displayName = "CodeDotsOutlineLogo";

export const CodeDotsOutlineLogoMetadata = {
  id: "code-dots-outline",
  baseId: "code-dots-outline",
  variant: "default",
  name: "Code Dots Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeDotsOutlineLogo;
