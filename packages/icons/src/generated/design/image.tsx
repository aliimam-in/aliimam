/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ImageProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Image = React.forwardRef<SVGSVGElement, ImageProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
);
Image.displayName = "Image";
export const ImageMetadata = { 
  id: "image", 
  baseId: "image", 
  variant: "default", 
  name: "Image", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Image;
