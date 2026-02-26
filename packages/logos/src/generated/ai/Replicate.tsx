/**
 * Auto-generated logo component: Replicate (default)
 * Category: ai
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReplicateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Replicate = React.forwardRef<SVGSVGElement, ReplicateProps>(
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
      <g clipPath="url(#clip0_2011_424)">
<path d="M24 10.2625V12.9745H14.4816V24H11.448V10.2625H24Z" />
<path d="M24 5.13123V7.84802H8.75521V24H5.72159V5.13123H24Z" />
<path d="M24 0V2.7168H3.0336V24H0V0H24Z" />
</g>
<defs>
<clipPath id="clip0_2011_424">
<rect width="24" height="24" />
</clipPath>
</defs>
    </svg>
  )
);

Replicate.displayName = "Replicate";

export const ReplicateMetadata = {
  id: "Replicate",
  baseId: "Replicate",
  variant: "default",
  name: "Replicate",
  category: "ai",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Replicate;
