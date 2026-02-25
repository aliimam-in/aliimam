/**
 * Auto-generated logo component: Terraform Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TerraformIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TerraformIcon = React.forwardRef<SVGSVGElement, TerraformIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 291"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#4040B2" points="176.485057 188.994162 256.000302 143.127442 256.000302 51.2485453 176.485057 97.2122358"></polygon>
        <path d="M88.2425283,51.2485453 L167.757774,97.2122358 L167.757774,188.994162 L88.2425283,143.078957 M0,91.8304113 L79.5152453,137.745617 L79.5152453,45.9152057 L0,0 M88.2425283,244.994228 L167.757774,290.909434 L167.757774,199.079023 L88.2425283,153.163817" fill="#5C4EE5"></path>
    </g>
    </svg>
  )
);

TerraformIcon.displayName = "TerraformIcon";

export const TerraformIconMetadata = {
  id: "terraform-icon",
  baseId: "terraform-icon",
  variant: "default",
  name: "Terraform Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 291",
} as const;

export default TerraformIcon;
