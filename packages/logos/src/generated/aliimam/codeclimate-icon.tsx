/**
 * Auto-generated logo component: Codeclimate Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeclimateIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CodeclimateIcon = React.forwardRef<SVGSVGElement, CodeclimateIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 142"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M84.8414986,28.2992138 L113.613833,57.0715481 L142.386167,86.5816346 L169.682997,113.878465 L140.910663,141.913047 L113.613833,115.353969 L84.8414986,86.5816346 L76.7262248,93.221404 L39.8386167,130.846764 L28.7723343,141.913047 L0,113.878465 L10.3285303,101.336678 L84.8414986,28.2992138 Z M171.158501,-3.55271368e-15 L256,84.1037464 L227.227666,113.613833 L171.158501,57.5446686 L151.239193,77.4639769 L122.466859,48.6916427 L171.158501,-3.55271368e-15 Z" fill="#2B2B2B"></path>
    </g>
    </svg>
  )
);

CodeclimateIcon.displayName = "CodeclimateIcon";

export const CodeclimateIconMetadata = {
  id: "codeclimate-icon",
  baseId: "codeclimate-icon",
  variant: "default",
  name: "Codeclimate Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 142",
} as const;

export default CodeclimateIcon;
