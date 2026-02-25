/**
 * Auto-generated logo component: File Rss Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileRssOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileRssOutlineLogo = React.forwardRef<SVGSVGElement, FileRssOutlineLogoProps>(
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
  <path d="M12 17a3 3 0 0 0 -3 -3" />
  <path d="M15 17a6 6 0 0 0 -6 -6" />
  <path d="M9 17h.01" />
    </svg>
  )
);

FileRssOutlineLogo.displayName = "FileRssOutlineLogo";

export const FileRssOutlineLogoMetadata = {
  id: "file-rss-outline",
  baseId: "file-rss-outline",
  variant: "default",
  name: "File Rss Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileRssOutlineLogo;
