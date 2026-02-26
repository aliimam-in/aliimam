/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TouchpadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Touchpad = React.forwardRef<SVGSVGElement, TouchpadProps>(
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M2 14h20" />
  <path d="M12 20v-6" />
    </svg>
  )
);
Touchpad.displayName = "Touchpad";
export const TouchpadMetadata = { 
  id: "touchpad", 
  baseId: "touchpad", 
  variant: "default", 
  name: "Touchpad", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Touchpad;
