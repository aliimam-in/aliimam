/**
 * Auto-generated logo component: Grid Pattern Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GridPatternFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GridPatternFilledLogo = React.forwardRef<SVGSVGElement, GridPatternFilledLogoProps>(
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
      <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3zm-4 4a1 1 0 0 0 -1 1v1h-2v-1a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v1h-1a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h1v2h-1a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h1v1a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-1h2v1a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-1h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-1v-2h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-1v-1a1 1 0 0 0 -.883 -.993zm-1 4v2h-2v-2z" />
    </svg>
  )
);

GridPatternFilledLogo.displayName = "GridPatternFilledLogo";

export const GridPatternFilledLogoMetadata = {
  id: "grid-pattern-filled",
  baseId: "grid-pattern-filled",
  variant: "default",
  name: "Grid Pattern Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GridPatternFilledLogo;
