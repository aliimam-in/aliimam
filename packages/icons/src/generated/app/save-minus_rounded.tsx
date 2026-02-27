/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SaveMinusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SaveMinusRounded = React.forwardRef<SVGSVGElement, SaveMinusRoundedProps>(
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
      <path d="M16 8.98999V20.35C16 21.8 14.96 22.41 13.69 21.71L9.76001 19.52C9.34001 19.29 8.65999 19.29 8.23999 19.52L4.31 21.71C3.04 22.41 2 21.8 2 20.35V8.98999C2 7.27999 3.39999 5.88 5.10999 5.88H12.89C14.6 5.88 16 7.27999 16 8.98999Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12H11"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SaveMinusRounded.displayName = "SaveMinusRounded";
export const SaveMinusRoundedMetadata = { 
  id: "save-minus_rounded", 
  baseId: "save-minus", 
  variant: "rounded", 
  name: "Save Minus", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SaveMinusRounded;
