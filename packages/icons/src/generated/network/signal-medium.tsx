/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SignalMediumProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SignalMedium = React.forwardRef<SVGSVGElement, SignalMediumProps>(
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
  <path d="M7 20v-4" />
  <path d="M12 20v-8" />
    </svg>
  )
);
SignalMedium.displayName = "SignalMedium";
export const SignalMediumMetadata = { 
  id: "signal-medium", 
  baseId: "signal-medium", 
  variant: "default", 
  name: "Signal Medium", 
  category: "network", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SignalMedium;
