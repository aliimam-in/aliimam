/**
 * Auto-generated logo component: Dovetail Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DovetailIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DovetailIcon = React.forwardRef<SVGSVGElement, DovetailIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 293"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M256,182.857143 L192,219.428571 L192,146.285714 L128,109.312 L192,73.1428571 L256,109.714286 L256,182.857143 Z M127.990857,109.714286 L63.9908571,146.285714 L63.9908571,73.1428571 L0,36.5714286 L64,0 L127.990857,36.5714286 L127.990857,109.714286 Z M127.990857,256 L63.9908571,292.571429 L64,219.428571 L0,182.857143 L63.9908571,146.285714 L127.990857,182.857143 L127.990857,256 Z" fill="#230078"></path>
    </g>
    </svg>
  )
);

DovetailIcon.displayName = "DovetailIcon";

export const DovetailIconMetadata = {
  id: "dovetail-icon",
  baseId: "dovetail-icon",
  variant: "default",
  name: "Dovetail Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 293",
} as const;

export default DovetailIcon;
