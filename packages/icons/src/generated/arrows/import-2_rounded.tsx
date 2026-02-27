/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Import2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Import2Rounded = React.forwardRef<SVGSVGElement, Import2RoundedProps>(
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
      <path d="M9.32007 11.68L11.8801 14.24L14.4401 11.68" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.8799 4V14.17" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12.18C20 16.6 17 20.18 12 20.18C7 20.18 4 16.6 4 12.18" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Import2Rounded.displayName = "Import2Rounded";
export const Import2RoundedMetadata = { 
  id: "import-2_rounded", 
  baseId: "import-2", 
  variant: "rounded", 
  name: "Import 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Import2Rounded;
