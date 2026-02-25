/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SignatureProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Signature = React.forwardRef<SVGSVGElement, SignatureProps>(
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
      <path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
  <path d="M3 21h18" />
    </svg>
  )
);
Signature.displayName = "Signature";
export const SignatureMetadata = { 
  id: "signature", 
  baseId: "signature", 
  variant: "default", 
  name: "Signature", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Signature;
