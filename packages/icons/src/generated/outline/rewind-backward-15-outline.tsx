/**
 * Auto-generated logo component: Rewind Backward 15 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RewindBackward15OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RewindBackward15OutlineLogo = React.forwardRef<SVGSVGElement, RewindBackward15OutlineLogoProps>(
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
      <path d="M8 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
  <path d="M15 18a6 6 0 1 0 0 -12h-11" />
  <path d="M5 14v6" />
  <path d="M7 9l-3 -3l3 -3" />
    </svg>
  )
);

RewindBackward15OutlineLogo.displayName = "RewindBackward15OutlineLogo";

export const RewindBackward15OutlineLogoMetadata = {
  id: "rewind-backward-15-outline",
  baseId: "rewind-backward-15-outline",
  variant: "default",
  name: "Rewind Backward 15 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RewindBackward15OutlineLogo;
