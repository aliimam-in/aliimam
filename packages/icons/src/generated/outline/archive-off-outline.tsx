/**
 * Auto-generated logo component: Archive Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArchiveOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArchiveOffOutlineLogo = React.forwardRef<SVGSVGElement, ArchiveOffOutlineLogoProps>(
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
      <path d="M8 4h11a2 2 0 1 1 0 4h-7m-4 0h-3a2 2 0 0 1 -.826 -3.822" />
  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.824 -1.18m.176 -3.82v-7" />
  <path d="M10 12h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ArchiveOffOutlineLogo.displayName = "ArchiveOffOutlineLogo";

export const ArchiveOffOutlineLogoMetadata = {
  id: "archive-off-outline",
  baseId: "archive-off-outline",
  variant: "default",
  name: "Archive Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArchiveOffOutlineLogo;
