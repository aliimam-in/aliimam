/**
 * Auto-generated logo component: File Neutral Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileNeutralOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileNeutralOutlineLogo = React.forwardRef<SVGSVGElement, FileNeutralOutlineLogoProps>(
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
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2m-7 -7h.01m3.99 0h.01m-4.01 3h4" />
    </svg>
  )
);

FileNeutralOutlineLogo.displayName = "FileNeutralOutlineLogo";

export const FileNeutralOutlineLogoMetadata = {
  id: "file-neutral-outline",
  baseId: "file-neutral-outline",
  variant: "default",
  name: "File Neutral Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileNeutralOutlineLogo;
