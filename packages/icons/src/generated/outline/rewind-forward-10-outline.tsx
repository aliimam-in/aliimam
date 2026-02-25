/**
 * Auto-generated logo component: Rewind Forward 10 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RewindForward10OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RewindForward10OutlineLogo = React.forwardRef<SVGSVGElement, RewindForward10OutlineLogoProps>(
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
  <path d="M8 17.918a5.997 5.997 0 0 1 -5 -5.918a6 6 0 0 1 6 -6h11" />
  <path d="M12 14v6" />
  <path d="M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
    </svg>
  )
);

RewindForward10OutlineLogo.displayName = "RewindForward10OutlineLogo";

export const RewindForward10OutlineLogoMetadata = {
  id: "rewind-forward-10-outline",
  baseId: "rewind-forward-10-outline",
  variant: "default",
  name: "Rewind Forward 10 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RewindForward10OutlineLogo;
