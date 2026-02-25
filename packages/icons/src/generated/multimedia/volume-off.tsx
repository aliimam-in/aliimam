/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VolumeOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VolumeOff = React.forwardRef<SVGSVGElement, VolumeOffProps>(
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
      <path d="M16 9a5 5 0 0 1 .95 2.293" />
  <path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
  <path d="m2 2 20 20" />
  <path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
  <path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
    </svg>
  )
);
VolumeOff.displayName = "VolumeOff";
export const VolumeOffMetadata = { 
  id: "volume-off", 
  baseId: "volume-off", 
  variant: "default", 
  name: "Volume Off", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VolumeOff;
