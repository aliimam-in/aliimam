/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Like1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Like1Rounded = React.forwardRef<SVGSVGElement, Like1RoundedProps>(
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
      <path d="M7.48 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.48 9.54997"   strokeMiterlimit="10"/>
<path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Like1Rounded.displayName = "Like1Rounded";
export const Like1RoundedMetadata = { 
  id: "like-1_rounded", 
  baseId: "like-1", 
  variant: "rounded", 
  name: "Like 1", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Like1Rounded;
