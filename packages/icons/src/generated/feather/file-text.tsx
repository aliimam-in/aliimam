/**
 * Auto-generated logo component: File Text (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTextLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTextLogo = React.forwardRef<SVGSVGElement, FileTextLogoProps>(
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  )
);

FileTextLogo.displayName = "FileTextLogo";

export const FileTextLogoMetadata = {
  id: "file-text",
  baseId: "file-text",
  variant: "default",
  name: "File Text",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTextLogo;
