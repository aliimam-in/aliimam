/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UploadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Upload = React.forwardRef<SVGSVGElement, UploadProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </svg>
  )
);
Upload.displayName = "Upload";
export const UploadMetadata = { id: "upload", baseId: "upload", variant: "default", name: "Upload", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Upload;
