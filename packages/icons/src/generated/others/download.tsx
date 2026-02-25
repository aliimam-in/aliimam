/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DownloadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Download = React.forwardRef<SVGSVGElement, DownloadProps>(
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
      <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
    </svg>
  )
);
Download.displayName = "Download";
export const DownloadMetadata = { 
  id: "download", 
  baseId: "download", 
  variant: "default", 
  name: "Download", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Download;
