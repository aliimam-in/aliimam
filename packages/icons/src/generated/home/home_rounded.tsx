/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HomeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HomeRounded = React.forwardRef<SVGSVGElement, HomeRoundedProps>(
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
      <path d="M12 18V15"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.07 2.82L3.13999 8.37C2.35999 8.99 1.85999 10.3 2.02999 11.28L3.35999 19.24C3.59999 20.66 4.95999 21.81 6.39999 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99 20.86 8.37L13.93 2.83C12.86 1.97 11.13 1.97 10.07 2.82Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HomeRounded.displayName = "HomeRounded";
export const HomeRoundedMetadata = { 
  id: "home_rounded", 
  baseId: "home", 
  variant: "rounded", 
  name: "Home", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HomeRounded;
