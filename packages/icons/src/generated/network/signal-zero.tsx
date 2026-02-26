/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SignalZeroProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SignalZero = React.forwardRef<SVGSVGElement, SignalZeroProps>(
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
      <path d="M2 20h.01" />
    </svg>
  )
);
SignalZero.displayName = "SignalZero";
export const SignalZeroMetadata = { 
  id: "signal-zero", 
  baseId: "signal-zero", 
  variant: "default", 
  name: "Signal Zero", 
  category: "network", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SignalZero;
