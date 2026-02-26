/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GalleryVerticalEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GalleryVerticalEnd = React.forwardRef<SVGSVGElement, GalleryVerticalEndProps>(
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
      <path d="M7 2h10" />
  <path d="M5 6h14" />
  <rect width="18" height="12" x="3" y="10" rx="2" />
    </svg>
  )
);
GalleryVerticalEnd.displayName = "GalleryVerticalEnd";
export const GalleryVerticalEndMetadata = { 
  id: "gallery-vertical-end", 
  baseId: "gallery-vertical-end", 
  variant: "default", 
  name: "Gallery Vertical End", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GalleryVerticalEnd;
