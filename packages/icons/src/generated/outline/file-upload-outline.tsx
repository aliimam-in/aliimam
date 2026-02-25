/**
 * Auto-generated logo component: File Upload Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileUploadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileUploadOutlineLogo = React.forwardRef<SVGSVGElement, FileUploadOutlineLogoProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
  <path d="M12 11v6" />
  <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
    </svg>
  )
);

FileUploadOutlineLogo.displayName = "FileUploadOutlineLogo";

export const FileUploadOutlineLogoMetadata = {
  id: "file-upload-outline",
  baseId: "file-upload-outline",
  variant: "default",
  name: "File Upload Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileUploadOutlineLogo;
