/**
 * Auto-generated logo component: Openbootcamp (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OpenbootcampLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const OpenbootcampLogo = React.forwardRef<SVGSVGElement, OpenbootcampLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 70 51"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx="18.0497" cy="17.5852" rx="16.6122" ry="16.5852" fill="#0BF082"></ellipse><path fillRule="evenodd" clipRule="evenodd" d="M35.8644 17.5859H18.0488V34.9803H18.0496V50.1058H35.8651C40.6684 50.1058 44.5623 46.2119 44.5623 41.4086C44.5623 38.1684 42.7903 35.342 40.1626 33.8456C42.7899 32.3492 44.5615 29.523 44.5615 26.2831C44.5615 21.4798 40.6677 17.5859 35.8644 17.5859Z" fill="#047AF3"></path>
    </svg>
  )
);

OpenbootcampLogo.displayName = "OpenbootcampLogo";

export const OpenbootcampLogoMetadata = {
  id: "openbootcamp",
  baseId: "openbootcamp",
  variant: "default",
  name: "Openbootcamp",
  category: "mix",
  tags: [],
  viewBox: "0 0 70 51",
} as const;

export default OpenbootcampLogo;
