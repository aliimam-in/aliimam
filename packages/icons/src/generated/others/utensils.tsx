/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UtensilsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Utensils = React.forwardRef<SVGSVGElement, UtensilsProps>(
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
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
  <path d="M7 2v20" />
  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
);
Utensils.displayName = "Utensils";
export const UtensilsMetadata = { 
  id: "utensils", 
  baseId: "utensils", 
  variant: "default", 
  name: "Utensils", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Utensils;
