/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SignRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SignRightFilled = React.forwardRef<SVGSVGElement, SignRightFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 2a1 1 0 0 1 .993 .883l.007 .117v2h5a1 1 0 0 1 .694 .28l.087 .095l2 2.5a1 1 0 0 1 .072 1.147l-.072 .103l-2 2.5a1 1 0 0 1 -.652 .367l-.129 .008h-5v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-3a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .883 -.993l.117 -.007h3v-2a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
SignRightFilled.displayName = "SignRightFilled";
export const SignRightFilledMetadata = { 
  id: "sign-right_filled", 
  baseId: "sign-right", 
  variant: "filled", 
  name: "Sign Right", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SignRightFilled;
