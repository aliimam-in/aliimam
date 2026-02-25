/**
 * Auto-generated logo component: Auth0 Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Auth0IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Auth0Icon = React.forwardRef<SVGSVGElement, Auth0IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 285"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M220.412455,0 L127.996566,0 L156.558919,89.0059529 L248.974808,89.0059529 L174.20451,142.083429 L202.77514,231.594251 L202.77514,231.594251 C250.903243,196.534811 266.628676,143.473888 248.983084,89.0059529 L220.412455,0 Z M7.01832414,89.0059529 L99.4342131,89.0059529 L127.996566,0 L35.5889536,0 L7.01832414,89.0059529 L7.01832414,89.0059529 C-10.6355439,143.473888 5.09816596,196.534811 53.2262686,231.594251 L53.2262686,231.594251 L81.7886215,142.083429 L7.01832414,89.0059529 Z M53.2262686,231.594251 L127.996566,284.564132 L202.766863,231.594251 L127.996566,177.747056 L53.2262686,231.594251 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

Auth0Icon.displayName = "Auth0Icon";

export const Auth0IconMetadata = {
  id: "auth0-icon",
  baseId: "auth0-icon",
  variant: "default",
  name: "Auth0 Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 285",
} as const;

export default Auth0Icon;
