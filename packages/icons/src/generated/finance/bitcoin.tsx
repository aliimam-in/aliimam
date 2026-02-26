/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BitcoinProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bitcoin = React.forwardRef<SVGSVGElement, BitcoinProps>(
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
);
Bitcoin.displayName = "Bitcoin";
export const BitcoinMetadata = { 
  id: "bitcoin", 
  baseId: "bitcoin", 
  variant: "default", 
  name: "Bitcoin", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Bitcoin;
