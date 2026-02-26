/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TerminalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Terminal = React.forwardRef<SVGSVGElement, TerminalProps>(
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
      <path d="M12 19h8" />
  <path d="m4 17 6-6-6-6" />
    </svg>
  )
);
Terminal.displayName = "Terminal";
export const TerminalMetadata = { 
  id: "terminal", 
  baseId: "terminal", 
  variant: "default", 
  name: "Terminal", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Terminal;
