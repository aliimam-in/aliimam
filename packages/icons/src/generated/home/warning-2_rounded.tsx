/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Warning2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Warning2Rounded = React.forwardRef<SVGSVGElement, Warning2RoundedProps>(
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
      <path d="M12 7.75V13"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.47998 18.15C3.50998 17.59 2.90997 16.55 2.90997 15.42V8.58003C2.90997 7.46003 3.50998 6.41999 4.47998 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.2V16.3"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Warning2Rounded.displayName = "Warning2Rounded";
export const Warning2RoundedMetadata = { 
  id: "warning-2_rounded", 
  baseId: "warning-2", 
  variant: "rounded", 
  name: "Warning 2", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Warning2Rounded;
