/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UnlockFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UnlockFilled = React.forwardRef<SVGSVGElement, UnlockFilledProps>(
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
      <path d="M12 17.3498C12.9002 17.3498 13.63 16.6201 13.63 15.7198C13.63 14.8196 12.9002 14.0898 12 14.0898C11.0998 14.0898 10.37 14.8196 10.37 15.7198C10.37 16.6201 11.0998 17.3498 12 17.3498Z" fill="currentColor"/>
<path d="M16.65 9.44H7.35C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.33 3.4 16.88 5.51 16.88 7.35C16.88 7.74 17.19 8.05 17.58 8.05C17.97 8.05 18.28 7.74 18.28 7.35C18.28 3.8 16.17 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 10.69 20.75 9.44 16.65 9.44ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74Z" fill="currentColor"/>
    </svg>
  )
);
UnlockFilled.displayName = "UnlockFilled";
export const UnlockFilledMetadata = { 
  id: "unlock_filled", 
  baseId: "unlock", 
  variant: "filled", 
  name: "Unlock", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UnlockFilled;
