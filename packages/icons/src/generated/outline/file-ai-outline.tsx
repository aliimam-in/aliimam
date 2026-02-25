/**
 * Auto-generated logo component: File Ai Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileAiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileAiOutlineLogo = React.forwardRef<SVGSVGElement, FileAiOutlineLogoProps>(
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
  <path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4" />
  <path d="M14 21v-4a2 2 0 1 1 4 0v4" />
  <path d="M14 19h4" />
  <path d="M21 15v6" />
    </svg>
  )
);

FileAiOutlineLogo.displayName = "FileAiOutlineLogo";

export const FileAiOutlineLogoMetadata = {
  id: "file-ai-outline",
  baseId: "file-ai-outline",
  variant: "default",
  name: "File Ai Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileAiOutlineLogo;
