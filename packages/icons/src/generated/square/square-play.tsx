/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquarePlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquarePlay = React.forwardRef<SVGSVGElement, SquarePlayProps>(
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
  <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
    </svg>
  )
);
SquarePlay.displayName = "SquarePlay";
export const SquarePlayMetadata = { 
  id: "square-play", 
  baseId: "square-play", 
  variant: "default", 
  name: "Square Play", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquarePlay;
