/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FrameFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FrameFilled = React.forwardRef<SVGSVGElement, FrameFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z" fill="currentColor"/>
<path d="M21.5 19.64V15.36C21.5 14.06 20.5 13 19.27 13H15.23C14 13 13 14.06 13 15.36V19.64C13 20.94 14 22 15.23 22H19.27C20.5 22 21.5 20.94 21.5 19.64Z" fill="currentColor"/>
<path d="M21.5 8.64V4.36C21.5 3.06 20.5 2 19.27 2H15.23C14 2 13 3.06 13 4.36V8.64C13 9.94 14 11 15.23 11H19.27C20.5 11 21.5 9.94 21.5 8.64Z" fill="currentColor"/>
    </svg>
  )
);
FrameFilled.displayName = "FrameFilled";
export const FrameFilledMetadata = { 
  id: "frame_filled", 
  baseId: "frame", 
  variant: "filled", 
  name: "Frame", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FrameFilled;
