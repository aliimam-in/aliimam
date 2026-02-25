/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MirrorRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MirrorRound = React.forwardRef<SVGSVGElement, MirrorRoundProps>(
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
      <path d="M10 6.6 8.6 8" />
  <path d="M12 18v4" />
  <path d="M15 7.5 9.5 13" />
  <path d="M7 22h10" />
  <circle cx="12" cy="10" r="8" />
    </svg>
  )
);
MirrorRound.displayName = "MirrorRound";
export const MirrorRoundMetadata = { 
  id: "mirror-round", 
  baseId: "mirror-round", 
  variant: "default", 
  name: "Mirror Round", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MirrorRound;
