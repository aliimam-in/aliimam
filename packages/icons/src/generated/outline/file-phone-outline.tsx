/**
 * Auto-generated logo component: File Phone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilePhoneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilePhoneOutlineLogo = React.forwardRef<SVGSVGElement, FilePhoneOutlineLogoProps>(
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
  <path d="M9 12a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  )
);

FilePhoneOutlineLogo.displayName = "FilePhoneOutlineLogo";

export const FilePhoneOutlineLogoMetadata = {
  id: "file-phone-outline",
  baseId: "file-phone-outline",
  variant: "default",
  name: "File Phone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilePhoneOutlineLogo;
