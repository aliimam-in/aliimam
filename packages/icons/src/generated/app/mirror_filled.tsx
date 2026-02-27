/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MirrorFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MirrorFilled = React.forwardRef<SVGSVGElement, MirrorFilledProps>(
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
      <path d="M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z" fill="currentColor"/>
<path d="M18 22.75H6C5.59 22.75 5.25 22.41 5.25 22C5.25 21.59 5.59 21.25 6 21.25H18C18.41 21.25 18.75 21.59 18.75 22C18.75 22.41 18.41 22.75 18 22.75Z" fill="currentColor"/>
    </svg>
  )
);
MirrorFilled.displayName = "MirrorFilled";
export const MirrorFilledMetadata = { 
  id: "mirror_filled", 
  baseId: "mirror", 
  variant: "filled", 
  name: "Mirror", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MirrorFilled;
