/**
 * Auto-generated logo component: T3 Stack (default)
 * Category: framework
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface T3StackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const T3Stack = React.forwardRef<SVGSVGElement, T3StackProps>(
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
      <g clipPath="url(#clip0_2066_420)">
<path fillRule="evenodd" clipRule="evenodd" d="M15.4173 4.39368L17.5766 2.0929H0.043457V4.39368H15.4173Z" />
<path d="M15.2539 11.1968L23.6298 2.3517L20.5772 2.35168L13.5457 9.71089L15.2539 11.1968Z" />
<path d="M21.7356 14.5475C21.7356 16.8062 19.9516 18.6373 17.7509 18.6373C15.9734 18.6373 14.4662 17.4423 13.9534 15.7907L13.6395 14.7795L11.8445 16.6217L12.0085 17.022C12.9502 19.3216 15.1659 20.9383 17.7509 20.9383C21.1898 20.9383 23.9775 18.0771 23.9775 14.5475C23.9775 12.2101 22.7347 10.1862 20.9261 9.07398L20.5018 8.81311L18.8583 10.5216L19.6081 10.9279C20.8746 11.6142 21.7356 12.9781 21.7356 14.5475Z" />
<path fillRule="evenodd" clipRule="evenodd" d="M8.2104 20.3955L8.21041 6.35815H5.96875V20.3955H8.2104Z" />
</g>
<defs>
<clipPath id="clip0_2066_420">
<rect width="24" height="19"  transform="translate(0 2)"/>
</clipPath>
</defs>
    </svg>
  )
);

T3Stack.displayName = "T3Stack";

export const T3StackMetadata = {
  id: "T3-Stack",
  baseId: "T3-Stack",
  variant: "default",
  name: "T3 Stack",
  category: "framework",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default T3Stack;
