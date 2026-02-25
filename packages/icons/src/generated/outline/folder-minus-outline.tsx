/**
 * Auto-generated logo component: Folder Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderMinusOutlineLogo = React.forwardRef<SVGSVGElement, FolderMinusOutlineLogoProps>(
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
      <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v6" />
  <path d="M16 19h6" />
    </svg>
  )
);

FolderMinusOutlineLogo.displayName = "FolderMinusOutlineLogo";

export const FolderMinusOutlineLogoMetadata = {
  id: "folder-minus-outline",
  baseId: "folder-minus-outline",
  variant: "default",
  name: "Folder Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderMinusOutlineLogo;
