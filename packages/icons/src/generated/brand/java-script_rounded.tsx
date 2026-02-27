/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface JavaScriptRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JavaScriptRounded = React.forwardRef<SVGSVGElement, JavaScriptRoundedProps>(
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
      <path d="M4.1001 2H19.9001C20.5001 2 21.0001 2.5 20.9001 3.1L19.1001 19.3C19.1001 19.7 18.8001 20 18.4001 20.2L12.3001 21.9C12.1001 22 11.9001 22 11.8001 21.9L5.7001 20.2C5.3001 20.1 5.0001 19.8 5.0001 19.3L3.1001 3.1C3.1001 2.5 3.5001 2 4.1001 2Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.6 7V16L7.5 15.1" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4999 7L13.3999 7.4V12.4L16.4999 11.9V15.1L12.8999 16" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
JavaScriptRounded.displayName = "JavaScriptRounded";
export const JavaScriptRoundedMetadata = { 
  id: "java-script_rounded", 
  baseId: "java-script", 
  variant: "rounded", 
  name: "Java Script", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default JavaScriptRounded;
