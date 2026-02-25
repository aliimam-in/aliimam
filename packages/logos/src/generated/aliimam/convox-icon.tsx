/**
 * Auto-generated logo component: Convox Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ConvoxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ConvoxIcon = React.forwardRef<SVGSVGElement, ConvoxIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 249"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M2.35959456,152.51546 L127.286733,218.208705 L253.197288,153.037731 L253.197288,182.933089 L127.20832,248.260888 L2.35959456,182.52448 L2.35959456,152.51546 Z M253.197288,98.6797879 L253.197288,128.566513 L127.20832,193.902945 L2.35959456,128.165818 L2.35959456,99.1761615 L127.2781,163.859395 L253.197288,98.6797879 Z M127.024878,-7.10542736e-15 L256,72.2576062 L191.272885,105.713186 L127.051495,139.474503 L0,72.1878261 L127.024878,-7.10542736e-15 Z M127.111923,30.4961139 L55.1942247,71.3781617 L127.086025,109.439585 L179.189425,82.0340077 L199.978846,71.31723 L127.111923,30.4961139 Z" fill="#4F8CE8"></path>
    </g>
    </svg>
  )
);

ConvoxIcon.displayName = "ConvoxIcon";

export const ConvoxIconMetadata = {
  id: "convox-icon",
  baseId: "convox-icon",
  variant: "default",
  name: "Convox Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 249",
} as const;

export default ConvoxIcon;
