/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShirtProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Shirt = React.forwardRef<SVGSVGElement, ShirtProps>(
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
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
);
Shirt.displayName = "Shirt";
export const ShirtMetadata = { 
  id: "shirt", 
  baseId: "shirt", 
  variant: "default", 
  name: "Shirt", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Shirt;
