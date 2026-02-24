/**
 * Auto-generated logo component: Trash 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixTrash2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixTrash2Logo = React.forwardRef<SVGSVGElement, MixTrash2LogoProps>(
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
      <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
);

MixTrash2Logo.displayName = "MixTrash2Logo";

export const MixTrash2LogoMetadata = {
  id: "trash-2",
  baseId: "trash-2",
  variant: "default",
  name: "Trash 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixTrash2Logo;
