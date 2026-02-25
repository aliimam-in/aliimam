/**
 * Auto-generated logo component: Analyze Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AnalyzeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AnalyzeOffOutlineLogo = React.forwardRef<SVGSVGElement, AnalyzeOffOutlineLogoProps>(
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
      <path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.086 8.086 0 0 0 -4.31 .62m-2.383 1.608a8.089 8.089 0 0 0 -1.326 1.69" />
  <path d="M4 13a8.1 8.1 0 0 0 13.687 4.676" />
  <path d="M20 16a1 1 0 0 0 -1 -1" />
  <path d="M4 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M9.888 9.87a3 3 0 1 0 4.233 4.252m.595 -3.397a3.012 3.012 0 0 0 -1.426 -1.435" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AnalyzeOffOutlineLogo.displayName = "AnalyzeOffOutlineLogo";

export const AnalyzeOffOutlineLogoMetadata = {
  id: "analyze-off-outline",
  baseId: "analyze-off-outline",
  variant: "default",
  name: "Analyze Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnalyzeOffOutlineLogo;
