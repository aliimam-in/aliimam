/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TypeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Type = React.forwardRef<SVGSVGElement, TypeProps>(
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
      <path d="M12 4v16" />
  <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
  <path d="M9 20h6" />
    </svg>
  )
);
Type.displayName = "Type";
export const TypeMetadata = { 
  id: "type", 
  baseId: "type", 
  variant: "default", 
  name: "Type", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Type;
