/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BackwardFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BackwardFilled = React.forwardRef<SVGSVGElement, BackwardFilledProps>(
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
      <path d="M22 8.34007V15.6601C22 17.1601 20.37 18.1001 19.07 17.3501L15.9 15.5201L12.73 13.6901L12.24 13.4101V10.5901L12.73 10.3101L15.9 8.48007L19.07 6.65007C20.37 5.90007 22 6.84007 22 8.34007Z" fill="currentColor"/>
<path d="M12.2399 8.34007V15.6601C12.2399 17.1601 10.6099 18.1001 9.31994 17.3501L6.13994 15.5201L2.96994 13.6901C1.67994 12.9401 1.67994 11.0601 2.96994 10.3101L6.13994 8.48007L9.31994 6.65007C10.6099 5.90007 12.2399 6.84007 12.2399 8.34007Z" fill="currentColor"/>
    </svg>
  )
);
BackwardFilled.displayName = "BackwardFilled";
export const BackwardFilledMetadata = { 
  id: "backward_filled", 
  baseId: "backward", 
  variant: "filled", 
  name: "Backward", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BackwardFilled;
