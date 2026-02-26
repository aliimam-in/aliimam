/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardTypeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardType = React.forwardRef<SVGSVGElement, ClipboardTypeProps>(
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="M9 12v-1h6v1" />
  <path d="M11 17h2" />
  <path d="M12 11v6" />
    </svg>
  )
);
ClipboardType.displayName = "ClipboardType";
export const ClipboardTypeMetadata = { 
  id: "clipboard-type", 
  baseId: "clipboard-type", 
  variant: "default", 
  name: "Clipboard Type", 
  category: "clipboard", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClipboardType;
