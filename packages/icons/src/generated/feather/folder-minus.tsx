/**
 * Auto-generated logo component: Folder Minus (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderMinusLogo = React.forwardRef<SVGSVGElement, FolderMinusLogoProps>(
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
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="9" y1="14" x2="15" y2="14"/>
    </svg>
  )
);

FolderMinusLogo.displayName = "FolderMinusLogo";

export const FolderMinusLogoMetadata = {
  id: "folder-minus",
  baseId: "folder-minus",
  variant: "default",
  name: "Folder Minus",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderMinusLogo;
