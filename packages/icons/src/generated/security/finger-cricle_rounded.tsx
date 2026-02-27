/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FingerCricleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FingerCricleRounded = React.forwardRef<SVGSVGElement, FingerCricleRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14.88C11.09 14.88 10.35 14.14 10.35 13.23V10.76C10.35 9.85001 11.09 9.10999 12 9.10999C12.91 9.10999 13.65 9.85001 13.65 10.76V13.23C13.65 14.14 12.91 14.88 12 14.88Z"   strokeLinecap="round"/>
<path d="M16.98 13.4699C16.78 16.0499 14.62 18.0699 12 18.0699C9.24 18.0699 7 15.8299 7 13.0699V10.9299C7 8.16993 9.24 5.92993 12 5.92993C14.59 5.92993 16.72 7.89992 16.97 10.4199"   strokeLinecap="round"/>
    </svg>
  )
);
FingerCricleRounded.displayName = "FingerCricleRounded";
export const FingerCricleRoundedMetadata = { 
  id: "finger-cricle_rounded", 
  baseId: "finger-cricle", 
  variant: "rounded", 
  name: "Finger Cricle", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FingerCricleRounded;
