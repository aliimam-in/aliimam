/**
 * Auto-generated logo component: File Headphone (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileHeadphoneLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileHeadphoneLogo = React.forwardRef<SVGSVGElement, FileHeadphoneLogoProps>(
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
      <path d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" />
    </svg>
  )
);

FileHeadphoneLogo.displayName = "FileHeadphoneLogo";

export const FileHeadphoneLogoMetadata = {
  id: "file-headphone",
  baseId: "file-headphone",
  variant: "default",
  name: "File Headphone",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileHeadphoneLogo;
