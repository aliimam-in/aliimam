/**
 * Auto-generated logo component: File Arrow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileArrowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileArrowRightOutlineLogo = React.forwardRef<SVGSVGElement, FileArrowRightOutlineLogoProps>(
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
  <path d="M9 15h6" />
  <path d="M12.5 17.5l2.5 -2.5l-2.5 -2.5" />
    </svg>
  )
);

FileArrowRightOutlineLogo.displayName = "FileArrowRightOutlineLogo";

export const FileArrowRightOutlineLogoMetadata = {
  id: "file-arrow-right-outline",
  baseId: "file-arrow-right-outline",
  variant: "default",
  name: "File Arrow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileArrowRightOutlineLogo;
