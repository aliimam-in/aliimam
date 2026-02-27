/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ImageRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ImageRounded = React.forwardRef<SVGSVGElement, ImageRoundedProps>(
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
      <path d="M21.6799 16.96L18.5499 9.65001C17.4899 7.17001 15.5399 7.07001 14.2299 9.43001L12.3399 12.84C11.3799 14.57 9.58993 14.72 8.34993 13.17L8.12993 12.89C6.83993 11.27 5.01993 11.47 4.08993 13.32L2.36993 16.77C1.15993 19.17 2.90993 22 5.58993 22H18.3499C20.9499 22 22.6999 19.35 21.6799 16.96Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.96997 8C8.62682 8 9.96997 6.65685 9.96997 5C9.96997 3.34315 8.62682 2 6.96997 2C5.31312 2 3.96997 3.34315 3.96997 5C3.96997 6.65685 5.31312 8 6.96997 8Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ImageRounded.displayName = "ImageRounded";
export const ImageRoundedMetadata = { 
  id: "image_rounded", 
  baseId: "image", 
  variant: "rounded", 
  name: "Image", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ImageRounded;
