/**
 * Auto-generated logo component: Tumblr Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TumblrIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TumblrIcon = React.forwardRef<SVGSVGElement, TumblrIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 446"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M234.575538,355.79965 C226.295877,359.749785 210.450702,363.186626 198.622614,363.499066 C162.982129,364.458703 156.063813,338.459226 155.751373,319.578919 L155.751373,180.922481 L245.198501,180.922481 L245.198501,113.502378 L156.08613,113.502378 L156.08613,0.042 L90.8307907,0.042 C89.7595676,0.042 87.8849272,0.979320199 87.6394386,3.36725499 C83.8232063,38.0927366 67.5540058,99.0408667 0,123.388875 L0,180.922481 L45.0806381,180.922481 L45.0806381,326.474918 C45.0806381,376.286791 81.8369802,447.076783 178.871938,445.425314 C211.588876,444.867386 247.94351,431.14234 256,419.336569 L234.575538,355.79965" fill="#303D4D"></path>
    </g>
    </svg>
  )
);

TumblrIcon.displayName = "TumblrIcon";

export const TumblrIconMetadata = {
  id: "tumblr-icon",
  baseId: "tumblr-icon",
  variant: "default",
  name: "Tumblr Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 446",
} as const;

export default TumblrIcon;
