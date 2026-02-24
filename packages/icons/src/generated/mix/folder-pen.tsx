/**
 * Auto-generated logo component: Folder Pen (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderPenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderPenLogo = React.forwardRef<SVGSVGElement, FolderPenLogoProps>(
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
      <path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" />
  <path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    </svg>
  )
);

FolderPenLogo.displayName = "FolderPenLogo";

export const FolderPenLogoMetadata = {
  id: "folder-pen",
  baseId: "folder-pen",
  variant: "default",
  name: "Folder Pen",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderPenLogo;
