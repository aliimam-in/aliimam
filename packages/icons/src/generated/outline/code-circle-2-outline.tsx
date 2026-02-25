/**
 * Auto-generated logo component: Code Circle 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeCircle2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeCircle2OutlineLogo = React.forwardRef<SVGSVGElement, CodeCircle2OutlineLogoProps>(
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
      <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5" />
  <path d="M15.5 10.5l1.5 1.5l-1.5 1.5" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M13 9.5l-2 5.5" />
    </svg>
  )
);

CodeCircle2OutlineLogo.displayName = "CodeCircle2OutlineLogo";

export const CodeCircle2OutlineLogoMetadata = {
  id: "code-circle-2-outline",
  baseId: "code-circle-2-outline",
  variant: "default",
  name: "Code Circle 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeCircle2OutlineLogo;
