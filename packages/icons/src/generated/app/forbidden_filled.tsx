/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ForbiddenFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ForbiddenFilled = React.forwardRef<SVGSVGElement, ForbiddenFilledProps>(
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
      <path d="M17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L4.41 18.55L18.55 4.41L17.02 2.88Z" fill="currentColor"/>
<path d="M21.12 6.98022L19.61 5.47021L5.46997 19.6102L6.97997 21.1202C7.45997 21.6002 8.41997 22.0002 9.09997 22.0002H14.9C15.58 22.0002 16.54 21.6002 17.02 21.1202L21.12 17.0202C21.6 16.5402 22 15.5802 22 14.9002V9.10022C22 8.42022 21.6 7.46022 21.12 6.98022Z" fill="currentColor"/>
<path d="M2.49002 20.4698C2.20002 20.7598 2.20002 21.2398 2.49002 21.5298C2.64002 21.6798 2.83002 21.7498 3.02002 21.7498C3.21002 21.7498 3.40002 21.6798 3.55002 21.5298L5.47002 19.6098L4.41002 18.5498L2.49002 20.4698Z" fill="currentColor"/>
<path d="M21.53 3.54996C21.82 3.25996 21.82 2.77996 21.53 2.48996C21.24 2.19996 20.76 2.19996 20.47 2.48996L18.55 4.40996L19.61 5.46996L21.53 3.54996Z" fill="currentColor"/>
    </svg>
  )
);
ForbiddenFilled.displayName = "ForbiddenFilled";
export const ForbiddenFilledMetadata = { 
  id: "forbidden_filled", 
  baseId: "forbidden", 
  variant: "filled", 
  name: "Forbidden", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ForbiddenFilled;
