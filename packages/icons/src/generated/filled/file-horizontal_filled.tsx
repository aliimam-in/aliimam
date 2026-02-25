/**
 * Auto-generated logo component: File Horizontal (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileHorizontalFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileHorizontalFilledLogo = React.forwardRef<SVGSVGElement, FileHorizontalFilledLogoProps>(
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
      <path d="M22 12l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007h-4l-.15 -.005a2 2 0 0 1 -1.844 -1.838l-.006 -.157v-4l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007h-9a3 3 0 0 0 -2.995 2.824l-.005 .176v10a3 3 0 0 0 2.824 2.995l.176 .005h14a3 3 0 0 0 2.995 -2.824l.005 -.176z" />
  <path d="M17 5v4l4.001 .001z" />
    </svg>
  )
);

FileHorizontalFilledLogo.displayName = "FileHorizontalFilledLogo";

export const FileHorizontalFilledLogoMetadata = {
  id: "file-horizontal_filled",
  baseId: "file-horizontal",
  variant: "filled",
  name: "File Horizontal",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileHorizontalFilledLogo;
