/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Folder2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Folder2Rounded = React.forwardRef<SVGSVGElement, Folder2RoundedProps>(
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
      <path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M8 2H17C19 2 20 3 20 5V6.38" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Folder2Rounded.displayName = "Folder2Rounded";
export const Folder2RoundedMetadata = { 
  id: "folder-2_rounded", 
  baseId: "folder-2", 
  variant: "rounded", 
  name: "Folder 2", 
  category: "folder", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Folder2Rounded;
