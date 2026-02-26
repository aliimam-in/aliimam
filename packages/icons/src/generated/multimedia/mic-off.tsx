/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MicOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MicOff = React.forwardRef<SVGSVGElement, MicOffProps>(
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
      <path d="M12 19v3" />
  <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
  <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" />
  <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" />
  <path d="m2 2 20 20" />
  <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    </svg>
  )
);
MicOff.displayName = "MicOff";
export const MicOffMetadata = { 
  id: "mic-off", 
  baseId: "mic-off", 
  variant: "default", 
  name: "Mic Off", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MicOff;
