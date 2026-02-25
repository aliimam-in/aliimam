/**
 * Auto-generated logo component: File Code 2 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileCode2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileCode2FilledLogo = React.forwardRef<SVGSVGElement, FileCode2FilledLogoProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-2 9h-1a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007v-3a1 1 0 0 0 0 -2m5 0h-1a1 1 0 0 0 0 2v3a1 1 0 0 0 0 2h1a1 1 0 0 0 1 -1v-5a1 1 0 0 0 -1 -1m-.001 -8.001l4.001 4.001h-4z" />
    </svg>
  )
);

FileCode2FilledLogo.displayName = "FileCode2FilledLogo";

export const FileCode2FilledLogoMetadata = {
  id: "file-code-2-filled",
  baseId: "file-code-2-filled",
  variant: "default",
  name: "File Code 2 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileCode2FilledLogo;
