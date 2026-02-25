/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GalleryHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GalleryHorizontal = React.forwardRef<SVGSVGElement, GalleryHorizontalProps>(
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
      <path d="M2 3v18" />
  <rect width="12" height="18" x="6" y="3" rx="2" />
  <path d="M22 3v18" />
    </svg>
  )
);
GalleryHorizontal.displayName = "GalleryHorizontal";
export const GalleryHorizontalMetadata = { 
  id: "gallery-horizontal", 
  baseId: "gallery-horizontal", 
  variant: "default", 
  name: "Gallery Horizontal", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GalleryHorizontal;
