/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudDownloadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudDownload = React.forwardRef<SVGSVGElement, CloudDownloadProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 13v8l-4-4" />
  <path d="m12 21 4-4" />
  <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
    </svg>
  )
);
CloudDownload.displayName = "CloudDownload";
export const CloudDownloadMetadata = { 
  id: "cloud-download", 
  baseId: "cloud-download", 
  variant: "default", 
  name: "Cloud Download", 
  category: "cloud", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudDownload;
