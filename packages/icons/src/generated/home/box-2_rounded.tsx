/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Box2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Box2Rounded = React.forwardRef<SVGSVGElement, Box2RoundedProps>(
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
      <path d="M18.67 18.67L20.89 17.56V14.78M14.22 9.78L12 10.89L14.22 9.78ZM12 10.89L9.78 9.78L12 10.89ZM12 10.89V13.67V10.89ZM20.89 6.44L18.67 7.55L20.89 6.44ZM20.89 6.44L18.67 5.33L20.89 6.44ZM20.89 6.44V9.22V6.44ZM14.22 3.11L12 2L9.78 3.11H14.22ZM3.11 6.44L5.33 5.33L3.11 6.44ZM3.11 6.44L5.33 7.55L3.11 6.44ZM3.11 6.44V9.22V6.44ZM12 22L9.78 20.89L12 22ZM12 22L14.22 20.89L12 22ZM12 22V19.22V22ZM5.33 18.67L3.11 17.56V14.78L5.33 18.67Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Box2Rounded.displayName = "Box2Rounded";
export const Box2RoundedMetadata = { 
  id: "box-2_rounded", 
  baseId: "box-2", 
  variant: "rounded", 
  name: "Box 2", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Box2Rounded;
