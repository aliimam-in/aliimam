/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CommandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Command = React.forwardRef<SVGSVGElement, CommandProps>(
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
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  )
);
Command.displayName = "Command";
export const CommandMetadata = { 
  id: "command", 
  baseId: "command", 
  variant: "default", 
  name: "Command", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Command;
