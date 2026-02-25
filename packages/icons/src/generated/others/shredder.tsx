/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShredderProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Shredder = React.forwardRef<SVGSVGElement, ShredderProps>(
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
      <path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 22v-5" />
  <path d="M14 19v-2" />
  <path d="M18 20v-3" />
  <path d="M2 13h20" />
  <path d="M6 20v-3" />
    </svg>
  )
);
Shredder.displayName = "Shredder";
export const ShredderMetadata = { 
  id: "shredder", 
  baseId: "shredder", 
  variant: "default", 
  name: "Shredder", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Shredder;
