/**
 * Auto-generated logo component: File Pencil Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilePencilFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilePencilFilledLogo = React.forwardRef<SVGSVGElement, FilePencilFilledLogoProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm1 10l-5 5v2h2l5 -5a1.414 1.414 0 0 0 -2 -2" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);

FilePencilFilledLogo.displayName = "FilePencilFilledLogo";

export const FilePencilFilledLogoMetadata = {
  id: "file-pencil-filled",
  baseId: "file-pencil-filled",
  variant: "default",
  name: "File Pencil Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilePencilFilledLogo;
