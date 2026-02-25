/**
 * Auto-generated logo component: Folders Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FoldersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FoldersOutlineLogo = React.forwardRef<SVGSVGElement, FoldersOutlineLogoProps>(
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
      <path d="M9 3h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
  <path d="M17 16v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
    </svg>
  )
);

FoldersOutlineLogo.displayName = "FoldersOutlineLogo";

export const FoldersOutlineLogoMetadata = {
  id: "folders-outline",
  baseId: "folders-outline",
  variant: "default",
  name: "Folders Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FoldersOutlineLogo;
