/**
 * Auto-generated logo component: Aws Appflow (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AwsAppflowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AwsAppflow = React.forwardRef<SVGSVGElement, AwsAppflowProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
            <stop stopColor="#B0084D" offset="0%"></stop>
            <stop stopColor="#FF4F8B" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <rect fill="url(#linearGradient-1)" x="0" y="0" width="256" height="256"></rect>
        <path d="M133.3024,60.8 L83.0816,145.2384 L79.76,132.848 L73.5808,134.5056 L79.8336,157.8464 L103.1744,151.5904 L101.52,145.4112 L88.32,148.944 L136.9408,67.2032 L184.9888,67.2032 L209.008,108.8 L184.9888,150.4 L159.8816,150.4 L159.8816,156.8032 L188.6816,156.8032 L216.3968,108.8 L188.6816,60.8 L133.3024,60.8 Z M148.9312,104.4096 L150.5888,110.592 L163.9424,107.0112 L117.808,188.8032 L69.808,188.8032 L45.7888,147.2 L69.808,105.6 L89.4848,105.6 L89.4848,99.2032 L66.1152,99.2032 L38.4,147.2 L66.1152,195.2 L121.5456,195.2 L169.0784,110.9408 L172.3488,123.152 L178.5312,121.4944 L172.2752,98.1568 L148.9312,104.4096 Z" fill="#FFFFFF"></path>
    </g>
    </svg>
  )
);

AwsAppflow.displayName = "AwsAppflow";

export const AwsAppflowMetadata = {
  id: "aws-appflow",
  baseId: "aws-appflow",
  variant: "default",
  name: "Aws Appflow",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default AwsAppflow;
