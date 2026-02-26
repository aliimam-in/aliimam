/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SpadeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Spade = React.forwardRef<SVGSVGElement, SpadeProps>(
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
      <path d="M12 18v4" />
  <path d="M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5" />
    </svg>
  )
);
Spade.displayName = "Spade";
export const SpadeMetadata = { 
  id: "spade", 
  baseId: "spade", 
  variant: "default", 
  name: "Spade", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Spade;
