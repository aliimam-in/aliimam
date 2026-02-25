/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VibrateOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VibrateOff = React.forwardRef<SVGSVGElement, VibrateOffProps>(
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
      <path d="m2 8 2 2-2 2 2 2-2 2" />
  <path d="m22 8-2 2 2 2-2 2 2 2" />
  <path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
  <path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
);
VibrateOff.displayName = "VibrateOff";
export const VibrateOffMetadata = { 
  id: "vibrate-off", 
  baseId: "vibrate-off", 
  variant: "default", 
  name: "Vibrate Off", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VibrateOff;
