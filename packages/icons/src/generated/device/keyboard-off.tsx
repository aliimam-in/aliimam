/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KeyboardOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KeyboardOff = React.forwardRef<SVGSVGElement, KeyboardOffProps>(
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
      <path d="M 20 4 A2 2 0 0 1 22 6" />
  <path d="M 22 6 L 22 16.41" />
  <path d="M 7 16 L 16 16" />
  <path d="M 9.69 4 L 20 4" />
  <path d="M14 8h.01" />
  <path d="M18 8h.01" />
  <path d="m2 2 20 20" />
  <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
  <path d="M6 8h.01" />
  <path d="M8 12h.01" />
    </svg>
  )
);
KeyboardOff.displayName = "KeyboardOff";
export const KeyboardOffMetadata = { 
  id: "keyboard-off", 
  baseId: "keyboard-off", 
  variant: "default", 
  name: "Keyboard Off", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default KeyboardOff;
