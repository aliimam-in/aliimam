/**
 * Auto-generated logo component: File Type Corner (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeCornerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeCornerLogo = React.forwardRef<SVGSVGElement, FileTypeCornerLogoProps>(
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
      <path d="M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16" />
  <path d="M6 22h2" />
  <path d="M7 14v8" />
    </svg>
  )
);

FileTypeCornerLogo.displayName = "FileTypeCornerLogo";

export const FileTypeCornerLogoMetadata = {
  id: "file-type-corner",
  baseId: "file-type-corner",
  variant: "default",
  name: "File Type Corner",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeCornerLogo;
