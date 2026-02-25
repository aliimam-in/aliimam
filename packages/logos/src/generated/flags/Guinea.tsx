/**
 * Auto-generated logo component: Guinea (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GuineaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Guinea = React.forwardRef<SVGSVGElement, GuineaProps>(
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
      <path d="M10 4H22V28H10V4Z" fill="#F5D44A" />
<path d="M5 4H11V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z" fill="#BE2A2C" />
<path d="M27 28H21L21 4H27C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28Z" fill="#419364" />
    </svg>
  )
);

Guinea.displayName = "Guinea";

export const GuineaMetadata = {
  id: "Guinea",
  baseId: "Guinea",
  variant: "default",
  name: "Guinea",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Guinea;
