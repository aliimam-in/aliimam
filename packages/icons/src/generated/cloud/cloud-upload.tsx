/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudUploadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudUpload = React.forwardRef<SVGSVGElement, CloudUploadProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 13v8" />
  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="m8 17 4-4 4 4" />
    </svg>
  )
);
CloudUpload.displayName = "CloudUpload";
export const CloudUploadMetadata = { id: "cloud-upload", baseId: "cloud-upload", variant: "default", name: "Cloud Upload", category: "cloud", tags: [], viewBox: "0 0 24 24" } as const;
export default CloudUpload;
