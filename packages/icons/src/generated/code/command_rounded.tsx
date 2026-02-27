/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CommandRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CommandRounded = React.forwardRef<SVGSVGElement, CommandRoundedProps>(
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
      <path d="M16 8H8V16H16V8Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19C2 20.65 3.35 22 5 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CommandRounded.displayName = "CommandRounded";
export const CommandRoundedMetadata = { 
  id: "command_rounded", 
  baseId: "command", 
  variant: "rounded", 
  name: "Command", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CommandRounded;
