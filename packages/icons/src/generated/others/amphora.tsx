/**
 * Auto-generated logo component: Amphora (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AmphoraLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AmphoraLogo = React.forwardRef<SVGSVGElement, AmphoraLogoProps>(
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
      <path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" />
  <path d="M10 5H8a2 2 0 0 0 0 4h.68" />
  <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
  <path d="M14 5h2a2 2 0 0 1 0 4h-.68" />
  <path d="M18 22H6" />
  <path d="M9 2h6" />
    </svg>
  )
);

AmphoraLogo.displayName = "AmphoraLogo";

export const AmphoraLogoMetadata = {
  id: "amphora",
  baseId: "amphora",
  variant: "default",
  name: "Amphora",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AmphoraLogo;
