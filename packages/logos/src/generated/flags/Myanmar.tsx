/**
 * Auto-generated logo component: Myanmar (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MyanmarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Myanmar = React.forwardRef<SVGSVGElement, MyanmarProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 11H31V21H1V11Z" fill="#5CB145" />
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" fill="#F6CE46" />
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="#D83B3F" />
<path d="M18.578 16.9741L22.75 13.9431H17.593L16 9.03906L14.407 13.9431H9.25L13.422 16.9741L11.828 21.8781L16 18.8471L20.172 21.8781L18.578 16.9741Z" fill="white" />
    </svg>
  )
);

Myanmar.displayName = "Myanmar";

export const MyanmarMetadata = {
  id: "Myanmar",
  baseId: "Myanmar",
  variant: "default",
  name: "Myanmar",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Myanmar;
