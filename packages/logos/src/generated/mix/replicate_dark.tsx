/**
 * Auto-generated logo component: Replicate (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReplicateDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ReplicateDark = React.forwardRef<SVGSVGElement, ReplicateDarkProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 726 726"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_3)">
<path d="M726 310.438V392.476H438.068V726H346.302V310.438H726Z" fill="#ffff" />
<path d="M726 155.219V237.402H264.845V726H173.078V155.219H726Z" fill="#ffff" />
<path d="M726 0V82.1832H91.7664V726H0V0H726Z" fill="#ffff" />
</g>
<defs>
<clipPath id="clip0_1_3">
<rect width="726" height="726" fill="#ffff" />
</clipPath>
</defs>
    </svg>
  )
);

ReplicateDark.displayName = "ReplicateDark";

export const ReplicateDarkMetadata = {
  id: "replicate_dark",
  baseId: "replicate",
  variant: "dark",
  name: "Replicate",
  category: "mix",
  tags: [],
  viewBox: "0 0 726 726",
} as const;

export default ReplicateDark;
