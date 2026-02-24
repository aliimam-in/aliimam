/**
 * Auto-generated logo component: Adobe (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdobeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AdobeLogo = React.forwardRef<SVGSVGElement, AdobeLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 91 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_906_1839)">
<path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000" />
<path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000" />
<path d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z" fill="#EB1000" />
</g>
<defs>
<clipPath id="clip0_906_1839">
<rect width="90.4318" height="80" fill="white" />
</clipPath>
</defs>
    </svg>
  )
);

AdobeLogo.displayName = "AdobeLogo";

export const AdobeLogoMetadata = {
  id: "adobe",
  baseId: "adobe",
  variant: "default",
  name: "Adobe",
  category: "mix",
  tags: [],
  viewBox: "0 0 91 80",
} as const;

export default AdobeLogo;
