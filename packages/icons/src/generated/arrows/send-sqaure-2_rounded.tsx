/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SendSqaure2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SendSqaure2Rounded = React.forwardRef<SVGSVGElement, SendSqaure2RoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5898 7.67999H14.8298V11.93" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8299 7.67999L9.16992 13.34" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SendSqaure2Rounded.displayName = "SendSqaure2Rounded";
export const SendSqaure2RoundedMetadata = { 
  id: "send-sqaure-2_rounded", 
  baseId: "send-sqaure-2", 
  variant: "rounded", 
  name: "Send Sqaure 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SendSqaure2Rounded;
