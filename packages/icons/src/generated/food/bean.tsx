/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BeanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bean = React.forwardRef<SVGSVGElement, BeanProps>(
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
      <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
  <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
    </svg>
  )
);
Bean.displayName = "Bean";
export const BeanMetadata = { 
  id: "bean", 
  baseId: "bean", 
  variant: "default", 
  name: "Bean", 
  category: "food", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Bean;
