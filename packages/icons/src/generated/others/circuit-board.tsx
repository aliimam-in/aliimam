/**
 * Auto-generated logo component: Circuit Board (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitBoardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitBoardLogo = React.forwardRef<SVGSVGElement, CircuitBoardLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M11 9h4a2 2 0 0 0 2-2V3" />
  <circle cx="9" cy="9" r="2" />
  <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
  <circle cx="15" cy="15" r="2" />
    </svg>
  )
);

CircuitBoardLogo.displayName = "CircuitBoardLogo";

export const CircuitBoardLogoMetadata = {
  id: "circuit-board",
  baseId: "circuit-board",
  variant: "default",
  name: "Circuit Board",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitBoardLogo;
