/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GalleryImportRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GalleryImportRounded = React.forwardRef<SVGSVGElement, GalleryImportRoundedProps>(
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
      <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 2V8L20 6"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 8L16 6"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GalleryImportRounded.displayName = "GalleryImportRounded";
export const GalleryImportRoundedMetadata = { 
  id: "gallery-import_rounded", 
  baseId: "gallery-import", 
  variant: "rounded", 
  name: "Gallery Import", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GalleryImportRounded;
