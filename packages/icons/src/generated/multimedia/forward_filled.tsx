/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ForwardFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ForwardFilled = React.forwardRef<SVGSVGElement, ForwardFilledProps>(
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
      <path d="M2 8.34007V15.6601C2 17.1601 3.63 18.1001 4.93 17.3501L8.1 15.5201L11.27 13.6901L11.76 13.4101V10.5901L11.27 10.3101L8.1 8.48007L4.93 6.65007C3.63 5.90007 2 6.84007 2 8.34007Z" fill="currentColor"/>
<path d="M11.76 8.34007V15.6601C11.76 17.1601 13.39 18.1001 14.68 17.3501L17.86 15.5201L21.03 13.6901C22.32 12.9401 22.32 11.0601 21.03 10.3101L17.86 8.48007L14.68 6.65007C13.39 5.90007 11.76 6.84007 11.76 8.34007Z" fill="currentColor"/>
    </svg>
  )
);
ForwardFilled.displayName = "ForwardFilled";
export const ForwardFilledMetadata = { 
  id: "forward_filled", 
  baseId: "forward", 
  variant: "filled", 
  name: "Forward", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ForwardFilled;
