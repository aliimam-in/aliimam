/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface More2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const More2Rounded = React.forwardRef<SVGSVGElement, More2RoundedProps>(
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
      <path d="M12 9.32C13.19 9.32 14.16 8.35 14.16 7.16C14.16 5.97 13.19 5 12 5C10.81 5 9.83997 5.97 9.83997 7.16C9.83997 8.35 10.81 9.32 12 9.32Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.79 19C7.98 19 8.95 18.03 8.95 16.84C8.95 15.65 7.98 14.68 6.79 14.68C5.6 14.68 4.63 15.65 4.63 16.84C4.63 18.03 5.59 19 6.79 19Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.21 19C18.4 19 19.37 18.03 19.37 16.84C19.37 15.65 18.4 14.68 17.21 14.68C16.02 14.68 15.05 15.65 15.05 16.84C15.05 18.03 16.02 19 17.21 19Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
More2Rounded.displayName = "More2Rounded";
export const More2RoundedMetadata = { 
  id: "more-2_rounded", 
  baseId: "more-2", 
  variant: "rounded", 
  name: "More 2", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default More2Rounded;
