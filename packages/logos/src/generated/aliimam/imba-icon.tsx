/**
 * Auto-generated logo component: Imba Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImbaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ImbaIcon = React.forwardRef<SVGSVGElement, ImbaIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 216"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M253.824377,83.2421659 C225.729238,30.251342 -25.1039795,-23.8926203 2.05219781,11.1298856 C29.2083751,46.1523916 149.520445,94.2101731 156.649572,95.102575 C119.736726,106.693711 21.2140063,127.485123 42.3034028,144.998704 C63.3927993,162.512285 163.565299,142.952388 163.40001,143.263565 C135.661056,164.166721 101.122775,227.27195 135.824016,213.788922 C190.574812,192.516389 270.194908,114.119271 253.824377,83.2421659 Z" fill="#16CEC6"></path>
    </g>
    </svg>
  )
);

ImbaIcon.displayName = "ImbaIcon";

export const ImbaIconMetadata = {
  id: "imba-icon",
  baseId: "imba-icon",
  variant: "default",
  name: "Imba Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 216",
} as const;

export default ImbaIcon;
