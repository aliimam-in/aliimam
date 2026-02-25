/**
 * Auto-generated logo component: Terminal 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Terminal2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Terminal2OutlineLogo = React.forwardRef<SVGSVGElement, Terminal2OutlineLogoProps>(
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
      <path d="M8 9l3 3l-3 3" />
  <path d="M13 15l3 0" />
  <path d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12" />
    </svg>
  )
);

Terminal2OutlineLogo.displayName = "Terminal2OutlineLogo";

export const Terminal2OutlineLogoMetadata = {
  id: "terminal-2-outline",
  baseId: "terminal-2-outline",
  variant: "default",
  name: "Terminal 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Terminal2OutlineLogo;
