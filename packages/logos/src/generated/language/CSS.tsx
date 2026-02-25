/**
 * Auto-generated logo component: CSS (default)
 * Category: language
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CSSProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const CSS = React.forwardRef<SVGSVGElement, CSSProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M3.34486 21.6009L1.419 0H22.581L20.6531 21.5975L11.9871 24L3.34486 21.6009Z" fill="#264DE4"/>
<path d="M19.0026 20.2222L20.6501 1.76611H12V22.1636L19.0026 20.2222Z" fill="#2965F1"/>
<path d="M5.83406 9.7777L6.07148 12.4269H12V9.7777H5.83406ZM5.59776 7.06481H12V4.41553H5.35692L5.59776 7.06481ZM12 16.6581L11.9884 16.6612L9.03787 15.8645L8.84929 13.7516H6.18979L6.561 17.9113L11.9878 19.4179L12 19.4144V16.6581Z" fill="#EBEBEB"/>
<path d="M11.9909 9.7777V12.4269H15.2531L14.9456 15.8628L11.9909 16.6603V19.4166L17.422 17.9113L17.4618 17.4637L18.0843 10.4891L18.149 9.7777L18.6273 4.41553H11.9909V7.06481H15.7239L15.4828 9.7777H11.9909Z" fill="white"/>
    </svg>
  )
);

CSS.displayName = "CSS";

export const CSSMetadata = {
  id: "CSS",
  baseId: "CSS",
  variant: "default",
  name: "CSS",
  category: "language",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CSS;
