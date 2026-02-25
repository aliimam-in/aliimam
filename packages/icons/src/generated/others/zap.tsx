/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZapProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Zap = React.forwardRef<SVGSVGElement, ZapProps>(
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
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
);
Zap.displayName = "Zap";
export const ZapMetadata = { 
  id: "zap", 
  baseId: "zap", 
  variant: "default", 
  name: "Zap", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Zap;
