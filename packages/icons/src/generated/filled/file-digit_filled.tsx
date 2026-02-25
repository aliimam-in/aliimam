/**
 * Auto-generated logo component: File Digit (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileDigitFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileDigitFilledLogo = React.forwardRef<SVGSVGElement, FileDigitFilledLogoProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-1 9h-1a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2 -2v-3a2 2 0 0 0 -2 -2m4 0a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m-4 2v3h-1v-3z" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);

FileDigitFilledLogo.displayName = "FileDigitFilledLogo";

export const FileDigitFilledLogoMetadata = {
  id: "file-digit_filled",
  baseId: "file-digit",
  variant: "filled",
  name: "File Digit",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileDigitFilledLogo;
