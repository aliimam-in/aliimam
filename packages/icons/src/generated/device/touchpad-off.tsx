/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TouchpadOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TouchpadOff = React.forwardRef<SVGSVGElement, TouchpadOffProps>(
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
      <path d="M12 20v-6" />
  <path d="M19.656 14H22" />
  <path d="M2 14h12" />
  <path d="m2 2 20 20" />
  <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
  <path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" />
    </svg>
  )
);
TouchpadOff.displayName = "TouchpadOff";
export const TouchpadOffMetadata = { 
  id: "touchpad-off", 
  baseId: "touchpad-off", 
  variant: "default", 
  name: "Touchpad Off", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TouchpadOff;
