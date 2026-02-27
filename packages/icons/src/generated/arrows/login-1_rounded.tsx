/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Login1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Login1Rounded = React.forwardRef<SVGSVGElement, Login1RoundedProps>(
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
      <path d="M11.6799 14.62L14.2399 12.06L11.6799 9.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 12.06H14.17"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Login1Rounded.displayName = "Login1Rounded";
export const Login1RoundedMetadata = { 
  id: "login-1_rounded", 
  baseId: "login-1", 
  variant: "rounded", 
  name: "Login 1", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Login1Rounded;
