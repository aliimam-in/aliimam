/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Music2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Music2 = React.forwardRef<SVGSVGElement, Music2Props>(
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
      <circle cx="8" cy="18" r="4" />
  <path d="M12 18V2l7 4" />
    </svg>
  )
);
Music2.displayName = "Music2";
export const Music2Metadata = { 
  id: "music-2", 
  baseId: "music-2", 
  variant: "default", 
  name: "Music 2", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Music2;
