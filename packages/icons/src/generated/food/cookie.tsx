/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CookieProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cookie = React.forwardRef<SVGSVGElement, CookieProps>(
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
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
  <path d="M8.5 8.5v.01" />
  <path d="M16 15.5v.01" />
  <path d="M12 12v.01" />
  <path d="M11 17v.01" />
  <path d="M7 14v.01" />
    </svg>
  )
);
Cookie.displayName = "Cookie";
export const CookieMetadata = { 
  id: "cookie", 
  baseId: "cookie", 
  variant: "default", 
  name: "Cookie", 
  category: "food", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Cookie;
