/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WebcamProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Webcam = React.forwardRef<SVGSVGElement, WebcamProps>(
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
      <circle cx="12" cy="10" r="8" />
  <circle cx="12" cy="10" r="3" />
  <path d="M7 22h10" />
  <path d="M12 22v-4" />
    </svg>
  )
);
Webcam.displayName = "Webcam";
export const WebcamMetadata = { 
  id: "webcam", 
  baseId: "webcam", 
  variant: "default", 
  name: "Webcam", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Webcam;
