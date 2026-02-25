/**
 * Auto-generated logo component: File Volume (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileVolumeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileVolumeLogo = React.forwardRef<SVGSVGElement, FileVolumeLogoProps>(
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
      <path d="M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M12 15a5 5 0 0 1 0 6" />
  <path d="M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z" />
    </svg>
  )
);

FileVolumeLogo.displayName = "FileVolumeLogo";

export const FileVolumeLogoMetadata = {
  id: "file-volume",
  baseId: "file-volume",
  variant: "default",
  name: "File Volume",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileVolumeLogo;
