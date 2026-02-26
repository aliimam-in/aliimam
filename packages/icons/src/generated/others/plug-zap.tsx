/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlugZapProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlugZap = React.forwardRef<SVGSVGElement, PlugZapProps>(
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
      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
  <path d="m2 22 3-3" />
  <path d="M7.5 13.5 10 11" />
  <path d="M10.5 16.5 13 14" />
  <path d="m18 3-4 4h6l-4 4" />
    </svg>
  )
);
PlugZap.displayName = "PlugZap";
export const PlugZapMetadata = { 
  id: "plug-zap", 
  baseId: "plug-zap", 
  variant: "default", 
  name: "Plug Zap", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlugZap;
