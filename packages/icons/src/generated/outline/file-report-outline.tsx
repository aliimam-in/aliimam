/**
 * Auto-generated logo component: File Report Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileReportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileReportOutlineLogo = React.forwardRef<SVGSVGElement, FileReportOutlineLogoProps>(
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
      <path d="M13 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M17 13v4h4" />
  <path d="M12 3v4a1 1 0 0 0 1 1h4" />
  <path d="M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" />
    </svg>
  )
);

FileReportOutlineLogo.displayName = "FileReportOutlineLogo";

export const FileReportOutlineLogoMetadata = {
  id: "file-report-outline",
  baseId: "file-report-outline",
  variant: "default",
  name: "File Report Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileReportOutlineLogo;
