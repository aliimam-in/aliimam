/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PersonalcardRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PersonalcardRounded = React.forwardRef<SVGSVGElement, PersonalcardRoundedProps>(
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
      <path d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8H19"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12H19"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16H19"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.49994 11.29C9.49958 11.29 10.3099 10.4796 10.3099 9.47998C10.3099 8.48035 9.49958 7.66998 8.49994 7.66998C7.50031 7.66998 6.68994 8.48035 6.68994 9.47998C6.68994 10.4796 7.50031 11.29 8.49994 11.29Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PersonalcardRounded.displayName = "PersonalcardRounded";
export const PersonalcardRoundedMetadata = { 
  id: "personalcard_rounded", 
  baseId: "personalcard", 
  variant: "rounded", 
  name: "Personalcard", 
  category: "business", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PersonalcardRounded;
