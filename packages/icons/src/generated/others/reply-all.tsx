/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReplyAllProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReplyAll = React.forwardRef<SVGSVGElement, ReplyAllProps>(
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
      <path d="m12 17-5-5 5-5" />
  <path d="M22 18v-2a4 4 0 0 0-4-4H7" />
  <path d="m7 17-5-5 5-5" />
    </svg>
  )
);
ReplyAll.displayName = "ReplyAll";
export const ReplyAllMetadata = { 
  id: "reply-all", 
  baseId: "reply-all", 
  variant: "default", 
  name: "Reply All", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ReplyAll;
