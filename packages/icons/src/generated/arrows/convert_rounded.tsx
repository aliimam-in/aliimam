/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ConvertRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ConvertRounded = React.forwardRef<SVGSVGElement, ConvertRoundedProps>(
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
      <path d="M12.0051 21.9842C17.5165 21.9842 21.9843 17.5164 21.9843 12.005C21.9843 6.49362 17.5165 2.02578 12.0051 2.02578C6.49372 2.02578 2.02588 6.49362 2.02588 12.005C2.02588 17.5164 6.49372 21.9842 12.0051 21.9842Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.13721 4.02162L14.3002 12.2046L14.3202 7.66403" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.8629 19.9784L9.69989 11.8054L9.67993 16.336" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ConvertRounded.displayName = "ConvertRounded";
export const ConvertRoundedMetadata = { 
  id: "convert_rounded", 
  baseId: "convert", 
  variant: "rounded", 
  name: "Convert", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ConvertRounded;
