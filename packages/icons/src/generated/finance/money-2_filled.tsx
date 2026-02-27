/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Money2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Money2Filled = React.forwardRef<SVGSVGElement, Money2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
<path d="M17 3.5H7C4 3.5 2 5 2 8.5V9V15V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V15V9V8.5C22 5 20 3.5 17 3.5ZM7 19C7 16.18 6.09 15.14 3.5 15.02V15V9V8.98C6.09 8.86 7 7.82 7 5H17C17 7.82 17.91 8.86 20.5 8.98V9V15V15.02C17.91 15.14 17 16.18 17 19H7Z" fill="currentColor"/>
    </svg>
  )
);
Money2Filled.displayName = "Money2Filled";
export const Money2FilledMetadata = { 
  id: "money-2_filled", 
  baseId: "money-2", 
  variant: "filled", 
  name: "Money 2", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Money2Filled;
