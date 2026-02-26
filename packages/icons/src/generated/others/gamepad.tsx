/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GamepadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gamepad = React.forwardRef<SVGSVGElement, GamepadProps>(
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
      <line x1="6" x2="10" y1="12" y2="12" />
  <line x1="8" x2="8" y1="10" y2="14" />
  <line x1="15" x2="15.01" y1="13" y2="13" />
  <line x1="18" x2="18.01" y1="11" y2="11" />
  <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
);
Gamepad.displayName = "Gamepad";
export const GamepadMetadata = { 
  id: "gamepad", 
  baseId: "gamepad", 
  variant: "default", 
  name: "Gamepad", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Gamepad;
