/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SendHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SendHorizontal = React.forwardRef<SVGSVGElement, SendHorizontalProps>(
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
      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
  <path d="M6 12h16" />
    </svg>
  )
);
SendHorizontal.displayName = "SendHorizontal";
export const SendHorizontalMetadata = { 
  id: "send-horizontal", 
  baseId: "send-horizontal", 
  variant: "default", 
  name: "Send Horizontal", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SendHorizontal;
