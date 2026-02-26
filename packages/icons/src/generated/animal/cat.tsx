/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cat = React.forwardRef<SVGSVGElement, CatProps>(
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
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
  <path d="M8 14v.5" />
  <path d="M16 14v.5" />
  <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
);
Cat.displayName = "Cat";
export const CatMetadata = { 
  id: "cat", 
  baseId: "cat", 
  variant: "default", 
  name: "Cat", 
  category: "animal", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Cat;
