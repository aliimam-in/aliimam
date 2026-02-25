/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GalleryHorizontalEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GalleryHorizontalEnd = React.forwardRef<SVGSVGElement, GalleryHorizontalEndProps>(
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
      <path d="M2 7v10" />
  <path d="M6 5v14" />
  <rect width="12" height="18" x="10" y="3" rx="2" />
    </svg>
  )
);
GalleryHorizontalEnd.displayName = "GalleryHorizontalEnd";
export const GalleryHorizontalEndMetadata = { 
  id: "gallery-horizontal-end", 
  baseId: "gallery-horizontal-end", 
  variant: "default", 
  name: "Gallery Horizontal End", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GalleryHorizontalEnd;
