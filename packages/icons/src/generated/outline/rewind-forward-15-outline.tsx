/**
 * Auto-generated logo component: Rewind Forward 15 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RewindForward15OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RewindForward15OutlineLogo = React.forwardRef<SVGSVGElement, RewindForward15OutlineLogoProps>(
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
      <path d="M17 9l3 -3l-3 -3" />
  <path d="M9 18a6 6 0 1 1 0 -12h11" />
  <path d="M16 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
  <path d="M13 14v6" />
    </svg>
  )
);

RewindForward15OutlineLogo.displayName = "RewindForward15OutlineLogo";

export const RewindForward15OutlineLogoMetadata = {
  id: "rewind-forward-15-outline",
  baseId: "rewind-forward-15-outline",
  variant: "default",
  name: "Rewind Forward 15 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RewindForward15OutlineLogo;
