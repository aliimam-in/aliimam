/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CreativeCommonsRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CreativeCommonsRounded = React.forwardRef<SVGSVGElement, CreativeCommonsRoundedProps>(
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
      <path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.88 14.15C10.37 14.59 9.70999 14.87 8.98999 14.87C7.40999 14.87 6.12 13.59 6.12 12C6.12 10.41 7.39999 9.13 8.98999 9.13C9.71999 9.13 10.38 9.39998 10.88 9.84998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.88 14.15C17.37 14.59 16.71 14.87 15.99 14.87C14.41 14.87 13.12 13.59 13.12 12C13.12 10.41 14.4 9.13 15.99 9.13C16.72 9.13 17.38 9.39998 17.88 9.84998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CreativeCommonsRounded.displayName = "CreativeCommonsRounded";
export const CreativeCommonsRoundedMetadata = { 
  id: "creative-commons_rounded", 
  baseId: "creative-commons", 
  variant: "rounded", 
  name: "Creative Commons", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CreativeCommonsRounded;
