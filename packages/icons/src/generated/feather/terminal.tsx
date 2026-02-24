/**
 * Auto-generated logo component: Terminal (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TerminalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TerminalLogo = React.forwardRef<SVGSVGElement, TerminalLogoProps>(
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
      <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  )
);

TerminalLogo.displayName = "TerminalLogo";

export const TerminalLogoMetadata = {
  id: "terminal",
  baseId: "terminal",
  variant: "default",
  name: "Terminal",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TerminalLogo;
