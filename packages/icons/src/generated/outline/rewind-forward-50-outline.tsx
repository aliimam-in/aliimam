/**
 * Auto-generated logo component: Rewind Forward 50 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RewindForward50OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RewindForward50OutlineLogo = React.forwardRef<SVGSVGElement, RewindForward50OutlineLogoProps>(
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
  <path d="M9 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5v-3h3" />
    </svg>
  )
);

RewindForward50OutlineLogo.displayName = "RewindForward50OutlineLogo";

export const RewindForward50OutlineLogoMetadata = {
  id: "rewind-forward-50-outline",
  baseId: "rewind-forward-50-outline",
  variant: "default",
  name: "Rewind Forward 50 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RewindForward50OutlineLogo;
