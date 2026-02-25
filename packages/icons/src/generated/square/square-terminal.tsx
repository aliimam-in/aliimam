/**
 * Auto-generated logo component: Square Terminal (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareTerminalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareTerminalLogo = React.forwardRef<SVGSVGElement, SquareTerminalLogoProps>(
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
      <path d="m7 11 2-2-2-2" />
  <path d="M11 13h4" />
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    </svg>
  )
);

SquareTerminalLogo.displayName = "SquareTerminalLogo";

export const SquareTerminalLogoMetadata = {
  id: "square-terminal",
  baseId: "square-terminal",
  variant: "default",
  name: "Square Terminal",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareTerminalLogo;
