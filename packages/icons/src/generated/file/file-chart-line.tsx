/**
 * Auto-generated logo component: File Chart Line (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileChartLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileChartLineLogo = React.forwardRef<SVGSVGElement, FileChartLineLogoProps>(
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
  <path d="m16 13-3.5 3.5-2-2L8 17" />
    </svg>
  )
);

FileChartLineLogo.displayName = "FileChartLineLogo";

export const FileChartLineLogoMetadata = {
  id: "file-chart-line",
  baseId: "file-chart-line",
  variant: "default",
  name: "File Chart Line",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileChartLineLogo;
