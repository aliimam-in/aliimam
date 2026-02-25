/**
 * Auto-generated logo component: Zube (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZubeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Zube = React.forwardRef<SVGSVGElement, ZubeProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 178"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M5.10597431e-08,63.22837 L119.833448,126.457752 L119.833448,177.201696 L5.10597431e-08,113.971145 L5.10597431e-08,63.22837 Z M119.833904,1.42108547e-14 L8.99445476,58.4829443 L57.0800284,83.8548476 L119.833904,50.7438069 L119.833904,1.42108547e-14 Z M136.167451,0 L136.167451,50.7438069 L207.914378,88.6005284 L136.167451,126.457251 L136.167451,177.201056 L256,113.971507 L256,63.2283663 L136.167451,0 Z" fill="#0D83DD"></path>
    </g>
    </svg>
  )
);

Zube.displayName = "Zube";

export const ZubeMetadata = {
  id: "zube",
  baseId: "zube",
  variant: "default",
  name: "Zube",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 178",
} as const;

export default Zube;
