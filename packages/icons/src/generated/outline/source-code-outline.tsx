/**
 * Auto-generated logo component: Source Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SourceCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SourceCodeOutlineLogo = React.forwardRef<SVGSVGElement, SourceCodeOutlineLogoProps>(
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
      <path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" />
  <path d="M6 5l-2 2l2 2" />
  <path d="M10 9l2 -2l-2 -2" />
    </svg>
  )
);

SourceCodeOutlineLogo.displayName = "SourceCodeOutlineLogo";

export const SourceCodeOutlineLogoMetadata = {
  id: "source-code-outline",
  baseId: "source-code-outline",
  variant: "default",
  name: "Source Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SourceCodeOutlineLogo;
