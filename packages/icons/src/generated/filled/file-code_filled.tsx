/**
 * Auto-generated logo component: File Code (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileCodeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileCodeFilledLogo = React.forwardRef<SVGSVGElement, FileCodeFilledLogoProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-1.553 11.106a1 1 0 0 0 -1.341 .447l-1 2a1 1 0 0 0 0 .894l1 2a1 1 0 0 0 1.341 .447l.102 -.058a1 1 0 0 0 .345 -1.283l-.776 -1.553l.776 -1.553a1 1 0 0 0 -.447 -1.341m4.447 .447a1 1 0 0 0 -1.341 -.447l-.102 .058a1 1 0 0 0 -.345 1.283l.774 1.553l-.775 1.553a1 1 0 0 0 1.788 .894l1 -2a1 1 0 0 0 0 -.894z" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);

FileCodeFilledLogo.displayName = "FileCodeFilledLogo";

export const FileCodeFilledLogoMetadata = {
  id: "file-code_filled",
  baseId: "file-code",
  variant: "filled",
  name: "File Code",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileCodeFilledLogo;
