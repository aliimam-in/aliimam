/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeadsetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Headset = React.forwardRef<SVGSVGElement, HeadsetProps>(
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
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
  <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </svg>
  )
);
Headset.displayName = "Headset";
export const HeadsetMetadata = { 
  id: "headset", 
  baseId: "headset", 
  variant: "default", 
  name: "Headset", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Headset;
