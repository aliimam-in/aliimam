/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BoomBoxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BoomBox = React.forwardRef<SVGSVGElement, BoomBoxProps>(
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
      <path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
  <path d="M8 8v1" />
  <path d="M12 8v1" />
  <path d="M16 8v1" />
  <rect width="20" height="12" x="2" y="9" rx="2" />
  <circle cx="8" cy="15" r="2" />
  <circle cx="16" cy="15" r="2" />
    </svg>
  )
);
BoomBox.displayName = "BoomBox";
export const BoomBoxMetadata = { 
  id: "boom-box", 
  baseId: "boom-box", 
  variant: "default", 
  name: "Boom Box", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BoomBox;
