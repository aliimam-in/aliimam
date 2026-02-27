/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Blend2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Blend2Rounded = React.forwardRef<SVGSVGElement, Blend2RoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M14.75 7.75C14.75 11.62 11.62 14.75 7.75 14.75C7.43 14.75 7.12 14.73 6.82 14.68C3.39 14.23 0.75 11.3 0.75 7.75C0.75 3.88 3.88 0.75 7.75 0.75C11.3 0.75 14.23 3.39 14.68 6.82C14.73 7.12 14.75 7.43 14.75 7.75Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.75 13.75C20.75 17.62 17.62 20.75 13.75 20.75C10.2 20.75 7.27001 18.11 6.82001 14.68C7.12001 14.73 7.43001 14.75 7.75001 14.75C11.62 14.75 14.75 11.62 14.75 7.75001C14.75 7.43001 14.73 7.12001 14.68 6.82001C18.11 7.27001 20.75 10.2 20.75 13.75Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.9 12.87L14.21 14.16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.75 10.75L14.75 9.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.75 15.75L9.75 14.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Blend2Rounded.displayName = "Blend2Rounded";
export const Blend2RoundedMetadata = { 
  id: "blend-2_rounded", 
  baseId: "blend-2", 
  variant: "rounded", 
  name: "Blend 2", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 22 22" 
} as const;

export default Blend2Rounded;
