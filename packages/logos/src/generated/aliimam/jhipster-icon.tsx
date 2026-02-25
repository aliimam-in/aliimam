/**
 * Auto-generated logo component: Jhipster Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JhipsterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const JhipsterIcon = React.forwardRef<SVGSVGElement, JhipsterIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 104"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M149.544885,43.0270896 C149.544885,43.0270896 22.5358854,-30.6745104 11.5576854,15.1642896 C0.579485422,61.0030896 -11.7683146,95.8422896 22.0650854,102.28369 C55.8984854,108.72509 149.544885,43.0270896 149.544885,43.0270896 Z" fill="#3474AB"></path>
        <path d="M127.588485,31.9418896 C163.968485,13.1098896 236.043685,-19.1613104 244.282685,15.0144896 C255.367885,61.0030896 267.822685,95.9920896 234.032085,102.56189 C210.320885,107.16289 156.992085,76.0686896 127.417285,57.1938896 C127.374485,34.8522896 127.631285,53.9624896 127.588485,31.9418896 Z" fill="#4289C7"></path>
    </g>
    </svg>
  )
);

JhipsterIcon.displayName = "JhipsterIcon";

export const JhipsterIconMetadata = {
  id: "jhipster-icon",
  baseId: "jhipster-icon",
  variant: "default",
  name: "Jhipster Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 104",
} as const;

export default JhipsterIcon;
