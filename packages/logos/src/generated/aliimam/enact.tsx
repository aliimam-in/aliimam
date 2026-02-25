/**
 * Auto-generated logo component: Enact (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EnactProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Enact = React.forwardRef<SVGSVGElement, EnactProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 313"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon points="127.948241 248.132632 50.3097452 197.408815 50.3097452 168.734331 128.051759 219.613425 127.948241 155.328751 50.3097452 110.091387 50.3097452 83.2802264 128 126.913061 128 126.913061 128.103518 126.96482 127.948241 62.5766276 0 0.0517589972 0 219.561666 128.051759 312.210271" fill="#5582FF"></polygon>
        <polygon opacity="0.8" points="128.051759 312.210271 256 219.665184 256 164.541852 127.948241 248.132632" fill="#5582FF"></polygon>
        <polygon opacity="0.8" points="128.051759 219.613425 217.80186 160.918722 217.80186 103.000404 127.948241 155.328751" fill="#5582FF"></polygon>
        <polygon opacity="0.8" points="128 126.913061 128 126.913061 128.103518 126.96482 256 55.071573 256 0 127.948241 62.5766276" fill="#5582FF"></polygon>
    </g>
    </svg>
  )
);

Enact.displayName = "Enact";

export const EnactMetadata = {
  id: "enact",
  baseId: "enact",
  variant: "default",
  name: "Enact",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 313",
} as const;

export default Enact;
