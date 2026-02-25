/**
 * Auto-generated logo component: Syria (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SyriaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Syria = React.forwardRef<SVGSVGElement, SyriaProps>(
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
<path d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z" fill="#BE2A2C" />
<path d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z" fill="black" />
<path d="M11.395 16.551L13.36 15.123H10.931L10.18 12.812L9.429 15.123H7L8.965 16.551L8.215 18.861L10.18 17.433L12.146 18.861L11.395 16.551Z" fill="#357942" />
<path d="M20.605 16.551L18.64 15.123H21.069L21.82 12.813L22.571 15.123H25L23.035 16.551L23.785 18.861L21.82 17.433L19.854 18.861L20.605 16.551Z" fill="#357942" />
    </svg>
  )
);

Syria.displayName = "Syria";

export const SyriaMetadata = {
  id: "Syria",
  baseId: "Syria",
  variant: "default",
  name: "Syria",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Syria;
