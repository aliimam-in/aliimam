/**
 * Auto-generated logo component: File Chart Pie (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileChartPieLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileChartPieLogo = React.forwardRef<SVGSVGElement, FileChartPieLogoProps>(
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
      <path d="M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M4.017 11.512a6 6 0 1 0 8.466 8.475" />
  <path d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" />
    </svg>
  )
);

FileChartPieLogo.displayName = "FileChartPieLogo";

export const FileChartPieLogoMetadata = {
  id: "file-chart-pie",
  baseId: "file-chart-pie",
  variant: "default",
  name: "File Chart Pie",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileChartPieLogo;
