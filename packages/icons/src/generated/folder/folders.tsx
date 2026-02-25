/**
 * Auto-generated logo component: Folders (default)
 * Category: folder
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FoldersLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FoldersLogo = React.forwardRef<SVGSVGElement, FoldersLogoProps>(
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
      <path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" />
  <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" />
    </svg>
  )
);

FoldersLogo.displayName = "FoldersLogo";

export const FoldersLogoMetadata = {
  id: "folders",
  baseId: "folders",
  variant: "default",
  name: "Folders",
  category: "folder",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FoldersLogo;
