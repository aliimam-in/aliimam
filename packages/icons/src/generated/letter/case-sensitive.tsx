/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CaseSensitiveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaseSensitive = React.forwardRef<SVGSVGElement, CaseSensitiveProps>(
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
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
  <path d="M22 9v7" />
  <path d="M3.304 13h6.392" />
  <circle cx="18.5" cy="12.5" r="3.5" />
    </svg>
  )
);
CaseSensitive.displayName = "CaseSensitive";
export const CaseSensitiveMetadata = { 
  id: "case-sensitive", 
  baseId: "case-sensitive", 
  variant: "default", 
  name: "Case Sensitive", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CaseSensitive;
