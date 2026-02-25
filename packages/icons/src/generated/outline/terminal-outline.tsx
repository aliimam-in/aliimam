/**
 * Auto-generated logo component: Terminal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TerminalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TerminalOutlineLogo = React.forwardRef<SVGSVGElement, TerminalOutlineLogoProps>(
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
      <path d="M5 7l5 5l-5 5" />
  <path d="M12 19l7 0" />
    </svg>
  )
);

TerminalOutlineLogo.displayName = "TerminalOutlineLogo";

export const TerminalOutlineLogoMetadata = {
  id: "terminal-outline",
  baseId: "terminal-outline",
  variant: "default",
  name: "Terminal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TerminalOutlineLogo;
