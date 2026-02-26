/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MegaphoneOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MegaphoneOff = React.forwardRef<SVGSVGElement, MegaphoneOffProps>(
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
      <path d="M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" />
  <path d="M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
  <path d="m2 2 20 20" />
  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
  <path d="M8 8v6" />
    </svg>
  )
);
MegaphoneOff.displayName = "MegaphoneOff";
export const MegaphoneOffMetadata = { 
  id: "megaphone-off", 
  baseId: "megaphone-off", 
  variant: "default", 
  name: "Megaphone Off", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MegaphoneOff;
