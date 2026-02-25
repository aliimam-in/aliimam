/**
 * Auto-generated logo component: Tonga (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TongaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Tonga = React.forwardRef<SVGSVGElement, TongaProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#B22518" />
<path d="M5 4H16V16H1V8C1 5.792 2.792 4 5 4Z" fill="white" />
<path d="M7.5 6.5H10V14H7.5V6.5Z" fill="#B22518" />
<path d="M12.5 9V11.5H5V9H12.5Z" fill="#B22518" />
    </svg>
  )
);

Tonga.displayName = "Tonga";

export const TongaMetadata = {
  id: "Tonga",
  baseId: "Tonga",
  variant: "default",
  name: "Tonga",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Tonga;
