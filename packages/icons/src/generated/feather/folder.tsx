/**
 * Auto-generated logo component: Folder (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderLogo = React.forwardRef<SVGSVGElement, FolderLogoProps>(
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
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  )
);

FolderLogo.displayName = "FolderLogo";

export const FolderLogoMetadata = {
  id: "folder",
  baseId: "folder",
  variant: "default",
  name: "Folder",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderLogo;
