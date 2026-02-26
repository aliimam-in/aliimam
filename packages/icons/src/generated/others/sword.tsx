/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SwordProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sword = React.forwardRef<SVGSVGElement, SwordProps>(
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
      <path d="m11 19-6-6" />
  <path d="m5 21-2-2" />
  <path d="m8 16-4 4" />
  <path d="M9.5 17.5 21 6V3h-3L6.5 14.5" />
    </svg>
  )
);
Sword.displayName = "Sword";
export const SwordMetadata = { 
  id: "sword", 
  baseId: "sword", 
  variant: "default", 
  name: "Sword", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Sword;
