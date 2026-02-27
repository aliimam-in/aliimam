/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RecordCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RecordCircleRounded = React.forwardRef<SVGSVGElement, RecordCircleRoundedProps>(
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
      <path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.23C14.3362 16.23 16.23 14.3362 16.23 12C16.23 9.66386 14.3362 7.77002 12 7.77002C9.66386 7.77002 7.77002 9.66386 7.77002 12C7.77002 14.3362 9.66386 16.23 12 16.23Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
RecordCircleRounded.displayName = "RecordCircleRounded";
export const RecordCircleRoundedMetadata = { 
  id: "record-circle_rounded", 
  baseId: "record-circle", 
  variant: "rounded", 
  name: "Record Circle", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RecordCircleRounded;
