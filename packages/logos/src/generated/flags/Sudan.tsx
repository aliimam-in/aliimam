/**
 * Auto-generated logo component: Sudan (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SudanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Sudan = React.forwardRef<SVGSVGElement, SudanProps>(
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
      <path d="M1 11H31V21H1V11Z" fill="white" />
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" fill="#C22B38" />
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="black" />
<path d="M2.271 26.9111L15 16.0001L2.271 5.08911C1.493 5.81911 1 6.84911 1 8.00011V24.0001C1 25.1511 1.493 26.1811 2.271 26.9111Z" fill="#31712F" />
    </svg>
  )
);

Sudan.displayName = "Sudan";

export const SudanMetadata = {
  id: "Sudan",
  baseId: "Sudan",
  variant: "default",
  name: "Sudan",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Sudan;
