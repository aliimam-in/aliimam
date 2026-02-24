/**
 * Auto-generated logo component: Pocket Knife (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PocketKnifeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PocketKnifeLogo = React.forwardRef<SVGSVGElement, PocketKnifeLogoProps>(
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
      <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
  <path d="M18 6h.01" />
  <path d="M6 18h.01" />
  <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
  <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
    </svg>
  )
);

PocketKnifeLogo.displayName = "PocketKnifeLogo";

export const PocketKnifeLogoMetadata = {
  id: "pocket-knife",
  baseId: "pocket-knife",
  variant: "default",
  name: "Pocket Knife",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PocketKnifeLogo;
