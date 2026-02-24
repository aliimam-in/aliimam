/**
 * Auto-generated logo component: File Plus Corner (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilePlusCornerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilePlusCornerLogo = React.forwardRef<SVGSVGElement, FilePlusCornerLogoProps>(
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
      <path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M14 19h6" />
  <path d="M17 16v6" />
    </svg>
  )
);

FilePlusCornerLogo.displayName = "FilePlusCornerLogo";

export const FilePlusCornerLogoMetadata = {
  id: "file-plus-corner",
  baseId: "file-plus-corner",
  variant: "default",
  name: "File Plus Corner",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilePlusCornerLogo;
