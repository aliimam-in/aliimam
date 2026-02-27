/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ImportRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ImportRounded = React.forwardRef<SVGSVGElement, ImportRoundedProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 2L13.8 10.2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 6.17V11H17.83"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ImportRounded.displayName = "ImportRounded";
export const ImportRoundedMetadata = { 
  id: "import_rounded", 
  baseId: "import", 
  variant: "rounded", 
  name: "Import", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ImportRounded;
