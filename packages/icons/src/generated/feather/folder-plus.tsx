/**
 * Auto-generated logo component: Folder Plus (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderPlusLogo = React.forwardRef<SVGSVGElement, FolderPlusLogoProps>(
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
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/>
    </svg>
  )
);

FolderPlusLogo.displayName = "FolderPlusLogo";

export const FolderPlusLogoMetadata = {
  id: "folder-plus",
  baseId: "folder-plus",
  variant: "default",
  name: "Folder Plus",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderPlusLogo;
