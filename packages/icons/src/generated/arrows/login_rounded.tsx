/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LoginRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LoginRounded = React.forwardRef<SVGSVGElement, LoginRoundedProps>(
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
      <path d="M8.8999 7.56C9.2099 3.96 11.0599 2.49 15.1099 2.49H15.2399C19.7099 2.49 21.4999 4.28 21.4999 8.75V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H14.88" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.6499 8.65L15.9999 12L12.6499 15.35" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LoginRounded.displayName = "LoginRounded";
export const LoginRoundedMetadata = { 
  id: "login_rounded", 
  baseId: "login", 
  variant: "rounded", 
  name: "Login", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LoginRounded;
