/**
 * Auto-generated logo component: File Video Camera (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileVideoCameraLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileVideoCameraLogo = React.forwardRef<SVGSVGElement, FileVideoCameraLogoProps>(
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
      <path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157" />
  <rect width="7" height="6" x="3" y="16" rx="1" />
    </svg>
  )
);

FileVideoCameraLogo.displayName = "FileVideoCameraLogo";

export const FileVideoCameraLogoMetadata = {
  id: "file-video-camera",
  baseId: "file-video-camera",
  variant: "default",
  name: "File Video Camera",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileVideoCameraLogo;
