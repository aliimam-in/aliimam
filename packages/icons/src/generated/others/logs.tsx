/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LogsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Logs = React.forwardRef<SVGSVGElement, LogsProps>(
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
      <path d="M3 5h1" />
  <path d="M3 12h1" />
  <path d="M3 19h1" />
  <path d="M8 5h1" />
  <path d="M8 12h1" />
  <path d="M8 19h1" />
  <path d="M13 5h8" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
    </svg>
  )
);
Logs.displayName = "Logs";
export const LogsMetadata = { 
  id: "logs", 
  baseId: "logs", 
  variant: "default", 
  name: "Logs", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Logs;
