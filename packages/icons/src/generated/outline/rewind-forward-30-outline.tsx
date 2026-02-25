/**
 * Auto-generated logo component: Rewind Forward 30 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RewindForward30OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RewindForward30OutlineLogo = React.forwardRef<SVGSVGElement, RewindForward30OutlineLogoProps>(
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
      <path d="M5.007 16.478a6 6 0 0 1 3.993 -10.478h11" />
  <path d="M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
  <path d="M17 9l3 -3l-3 -3" />
  <path d="M9 14h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
    </svg>
  )
);

RewindForward30OutlineLogo.displayName = "RewindForward30OutlineLogo";

export const RewindForward30OutlineLogoMetadata = {
  id: "rewind-forward-30-outline",
  baseId: "rewind-forward-30-outline",
  variant: "default",
  name: "Rewind Forward 30 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RewindForward30OutlineLogo;
