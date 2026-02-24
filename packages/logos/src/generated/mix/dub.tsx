/**
 * Auto-generated logo component: Dub (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DubLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DubLogo = React.forwardRef<SVGSVGElement, DubLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 191 191"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_36_30)">
<path d="M191 95.5C191 148.243 148.243 191 95.5 191C42.7568 191 0 148.243 0 95.5C0 42.7568 42.7568 0 95.5 0C148.243 0 191 42.7568 191 95.5Z" fill="black" />
<mask id="mask0_36_30" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="191" height="191">
<path d="M191 95.5C191 148.243 148.243 191 95.5 191C42.7568 191 0 148.243 0 95.5C0 42.7568 42.7568 0 95.5 0C148.243 0 191 42.7568 191 95.5Z" fill="black" />
</mask>
<g mask="url(#mask0_36_30)">
<circle cx="95" cy="100" r="49" fill="white" />
<path d="M122 -14H144V148H122V-14Z" fill="white" />
</g>
</g>
<defs>
<clipPath id="clip0_36_30">
<rect width="191" height="191" fill="white" />
</clipPath>
</defs>
    </svg>
  )
);

DubLogo.displayName = "DubLogo";

export const DubLogoMetadata = {
  id: "dub",
  baseId: "dub",
  variant: "default",
  name: "Dub",
  category: "mix",
  tags: [],
  viewBox: "0 0 191 191",
} as const;

export default DubLogo;
