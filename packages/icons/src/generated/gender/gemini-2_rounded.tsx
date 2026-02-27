/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Gemini2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gemini2Rounded = React.forwardRef<SVGSVGElement, Gemini2RoundedProps>(
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
      <path d="M12 22V3" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.3 5.29999L12 2L8.69995 5.29999" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 7L3 5L1 7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23 7L21 5L19 7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6.03998V11C3 15 5 17 9 17H15C19 17 21 15 21 11V6.03998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 20H15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Gemini2Rounded.displayName = "Gemini2Rounded";
export const Gemini2RoundedMetadata = { 
  id: "gemini-2_rounded", 
  baseId: "gemini-2", 
  variant: "rounded", 
  name: "Gemini 2", 
  category: "gender", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Gemini2Rounded;
