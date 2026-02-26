/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GalleryVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GalleryVertical = React.forwardRef<SVGSVGElement, GalleryVerticalProps>(
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
      <path d="M3 2h18" />
  <rect width="18" height="12" x="3" y="6" rx="2" />
  <path d="M3 22h18" />
    </svg>
  )
);
GalleryVertical.displayName = "GalleryVertical";
export const GalleryVerticalMetadata = { 
  id: "gallery-vertical", 
  baseId: "gallery-vertical", 
  variant: "default", 
  name: "Gallery Vertical", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GalleryVertical;
