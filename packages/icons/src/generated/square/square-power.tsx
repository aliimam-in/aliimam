/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquarePowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquarePower = React.forwardRef<SVGSVGElement, SquarePowerProps>(
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
      <path d="M12 7v4" />
  <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);
SquarePower.displayName = "SquarePower";
export const SquarePowerMetadata = { 
  id: "square-power", 
  baseId: "square-power", 
  variant: "default", 
  name: "Square Power", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquarePower;
