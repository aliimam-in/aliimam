/**
 * Auto-generated logo component: Rewind Backward 10 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RewindBackward10OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RewindBackward10OutlineLogo = React.forwardRef<SVGSVGElement, RewindBackward10OutlineLogoProps>(
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
      <path d="M7 9l-3 -3l3 -3" />
  <path d="M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11" />
  <path d="M6 14v6" />
  <path d="M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
    </svg>
  )
);

RewindBackward10OutlineLogo.displayName = "RewindBackward10OutlineLogo";

export const RewindBackward10OutlineLogoMetadata = {
  id: "rewind-backward-10-outline",
  baseId: "rewind-backward-10-outline",
  variant: "default",
  name: "Rewind Backward 10 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RewindBackward10OutlineLogo;
