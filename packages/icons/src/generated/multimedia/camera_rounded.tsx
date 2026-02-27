/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CameraRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CameraRounded = React.forwardRef<SVGSVGElement, CameraRoundedProps>(
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
      <path d="M6.75992 22H17.2399C19.9999 22 21.0999 20.31 21.2299 18.25L21.7499 9.99C21.8899 7.83 20.1699 6 17.9999 6C17.3899 6 16.8299 5.65 16.5499 5.11L15.8299 3.66C15.3699 2.75 14.1699 2 13.1499 2H10.8599C9.82992 2 8.62992 2.75 8.16992 3.66L7.44992 5.11C7.16992 5.65 6.60992 6 5.99992 6C3.82992 6 2.10992 7.83 2.24992 9.99L2.76992 18.25C2.88992 20.31 3.99992 22 6.75992 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 8H13.5"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CameraRounded.displayName = "CameraRounded";
export const CameraRoundedMetadata = { 
  id: "camera_rounded", 
  baseId: "camera", 
  variant: "rounded", 
  name: "Camera", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CameraRounded;
