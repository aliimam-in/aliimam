/**
 * Auto-generated logo component: File Signal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSignalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSignalLogo = React.forwardRef<SVGSVGElement, FileSignalLogoProps>(
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
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 15h.01" />
  <path d="M11.5 13.5a2.5 2.5 0 0 1 0 3" />
  <path d="M15 12a5 5 0 0 1 0 6" />
    </svg>
  )
);

FileSignalLogo.displayName = "FileSignalLogo";

export const FileSignalLogoMetadata = {
  id: "file-signal",
  baseId: "file-signal",
  variant: "default",
  name: "File Signal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSignalLogo;
