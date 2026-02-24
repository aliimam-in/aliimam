/**
 * Auto-generated logo component: File Minus (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileMinusLogo = React.forwardRef<SVGSVGElement, FileMinusLogoProps>(
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/>
    </svg>
  )
);

FileMinusLogo.displayName = "FileMinusLogo";

export const FileMinusLogoMetadata = {
  id: "file-minus",
  baseId: "file-minus",
  variant: "default",
  name: "File Minus",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileMinusLogo;
