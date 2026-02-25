/**
 * Auto-generated logo component: Productboard Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ProductboardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ProductboardIcon = React.forwardRef<SVGSVGElement, ProductboardIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 168"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#FF2638" points="85.326959 83.9967251 170.653918 167.99345 0 167.99345"></polygon>
        <polygon fill="#FFC600" points="0 0 85.326959 83.9967251 170.653918 0"></polygon>
        <polygon fill="#0079F2" points="85.3406727 83.9967251 170.667632 167.99345 255.994591 83.9967251 170.667632 0"></polygon>
    </g>
    </svg>
  )
);

ProductboardIcon.displayName = "ProductboardIcon";

export const ProductboardIconMetadata = {
  id: "productboard-icon",
  baseId: "productboard-icon",
  variant: "default",
  name: "Productboard Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 168",
} as const;

export default ProductboardIcon;
