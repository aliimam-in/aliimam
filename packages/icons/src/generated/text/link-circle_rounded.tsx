/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LinkCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LinkCircleRounded = React.forwardRef<SVGSVGElement, LinkCircleRoundedProps>(
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
      <path d="M7.93997 14.51C7.31997 14.28 6.76997 13.83 6.41997 13.19C5.61997 11.73 6.10997 9.83001 7.52997 8.95001L9.86996 7.5C11.28 6.62 13.1 7.09999 13.9 8.54999C14.7 10.01 14.21 11.91 12.79 12.79L12.48 13.01" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.11 9.45001C16.73 9.68001 17.28 10.13 17.63 10.77C18.43 12.23 17.94 14.13 16.52 15.01L14.1799 16.46C12.7699 17.34 10.9499 16.86 10.1499 15.41C9.34995 13.95 9.83995 12.05 11.2599 11.17L11.57 10.95" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LinkCircleRounded.displayName = "LinkCircleRounded";
export const LinkCircleRoundedMetadata = { 
  id: "link-circle_rounded", 
  baseId: "link-circle", 
  variant: "rounded", 
  name: "Link Circle", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LinkCircleRounded;
