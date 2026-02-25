/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ListVideoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ListVideo = React.forwardRef<SVGSVGElement, ListVideoProps>(
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
      <path d="M21 5H3" />
  <path d="M10 12H3" />
  <path d="M10 19H3" />
  <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
    </svg>
  )
);
ListVideo.displayName = "ListVideo";
export const ListVideoMetadata = { 
  id: "list-video", 
  baseId: "list-video", 
  variant: "default", 
  name: "List Video", 
  category: "list", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ListVideo;
