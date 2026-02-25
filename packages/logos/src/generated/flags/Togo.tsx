/**
 * Auto-generated logo component: Togo (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Togo = React.forwardRef<SVGSVGElement, TogoProps>(
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
      <path d="M5 4H27C29.208 4 31 5.792 31 8V10H1V8C1 5.792 2.792 4 5 4Z" fill="#2D684E" />
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V22L31 22V24C31 26.208 29.208 28 27 28Z" fill="#2D684E" />
<path d="M1 18H31V23H1V18Z" fill="#F8D147" />
<path d="M1 9H31V14H1V9Z" fill="#F8D147" />
<path d="M1 13.5H31V18.5H1V13.5Z" fill="#2D684E" />
<path d="M5 4H15.5V18.5H1V8C1 5.792 2.792 4 5 4Z" fill="#C22B38" />
<path d="M9.802 12.162L12.312 10.338H9.209L8.25 7.38599L7.291 10.338H4.187L6.698 12.162L5.739 15.114L8.25 13.289L10.761 15.114L9.802 12.162Z" fill="white" />
    </svg>
  )
);

Togo.displayName = "Togo";

export const TogoMetadata = {
  id: "Togo",
  baseId: "Togo",
  variant: "default",
  name: "Togo",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Togo;
