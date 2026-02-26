/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WrenchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Wrench = React.forwardRef<SVGSVGElement, WrenchProps>(
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </svg>
  )
);
Wrench.displayName = "Wrench";
export const WrenchMetadata = { 
  id: "wrench", 
  baseId: "wrench", 
  variant: "default", 
  name: "Wrench", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Wrench;
