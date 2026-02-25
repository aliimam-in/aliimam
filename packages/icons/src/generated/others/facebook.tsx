/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FacebookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Facebook = React.forwardRef<SVGSVGElement, FacebookProps>(
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
);
Facebook.displayName = "Facebook";
export const FacebookMetadata = { 
  id: "facebook", 
  baseId: "facebook", 
  variant: "default", 
  name: "Facebook", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Facebook;
