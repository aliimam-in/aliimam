/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KeyboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Keyboard = React.forwardRef<SVGSVGElement, KeyboardProps>(
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
      <path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />
    </svg>
  )
);
Keyboard.displayName = "Keyboard";
export const KeyboardMetadata = { 
  id: "keyboard", 
  baseId: "keyboard", 
  variant: "default", 
  name: "Keyboard", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Keyboard;
