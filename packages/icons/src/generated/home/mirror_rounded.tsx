/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MirrorRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MirrorRounded = React.forwardRef<SVGSVGElement, MirrorRoundedProps>(
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
      <path d="M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 22H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MirrorRounded.displayName = "MirrorRounded";
export const MirrorRoundedMetadata = { 
  id: "mirror_rounded", 
  baseId: "mirror", 
  variant: "rounded", 
  name: "Mirror", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MirrorRounded;
