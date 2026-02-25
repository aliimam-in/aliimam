/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ImageOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ImageOff = React.forwardRef<SVGSVGElement, ImageOffProps>(
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
      <line x1="2" x2="22" y1="2" y2="22" />
  <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
  <line x1="13.5" x2="6" y1="13.5" y2="21" />
  <line x1="18" x2="21" y1="12" y2="15" />
  <path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
  <path d="M21 15V5a2 2 0 0 0-2-2H9" />
    </svg>
  )
);
ImageOff.displayName = "ImageOff";
export const ImageOffMetadata = { 
  id: "image-off", 
  baseId: "image-off", 
  variant: "default", 
  name: "Image Off", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ImageOff;
