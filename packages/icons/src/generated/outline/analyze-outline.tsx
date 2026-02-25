/**
 * Auto-generated logo component: Analyze Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AnalyzeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AnalyzeOutlineLogo = React.forwardRef<SVGSVGElement, AnalyzeOutlineLogoProps>(
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
      <path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918" />
  <path d="M4 13a8.1 8.1 0 0 0 15 3" />
  <path d="M18 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

AnalyzeOutlineLogo.displayName = "AnalyzeOutlineLogo";

export const AnalyzeOutlineLogoMetadata = {
  id: "analyze-outline",
  baseId: "analyze-outline",
  variant: "default",
  name: "Analyze Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnalyzeOutlineLogo;
