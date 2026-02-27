/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudMinusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudMinusRounded = React.forwardRef<SVGSVGElement, CloudMinusRoundedProps>(
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
      <path d="M12.97 20H8.96997" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.61 20C17.95 20.01 19.24 19.51 20.23 18.61C23.5 15.75 21.75 10.01 17.44 9.47001C15.9 0.13001 2.42998 3.67001 5.61998 12.56" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.28011 12.97C6.75011 12.7 6.16011 12.56 5.57011 12.57C0.910109 12.9 0.920108 19.68 5.57011 20.01" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8201 9.89001C16.3401 9.63001 16.9001 9.49001 17.4801 9.48001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CloudMinusRounded.displayName = "CloudMinusRounded";
export const CloudMinusRoundedMetadata = { 
  id: "cloud-minus_rounded", 
  baseId: "cloud-minus", 
  variant: "rounded", 
  name: "Cloud Minus", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudMinusRounded;
