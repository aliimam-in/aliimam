/**
 * Auto-generated logo component: Blitzjs Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BlitzjsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BlitzjsIcon = React.forwardRef<SVGSVGElement, BlitzjsIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 394"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M65.0616978,196.687365 C89.8205926,196.687365 113.139606,208.323896 128.026679,228.106249 L192.204501,313.394482 C193.417342,315.00617 193.600242,317.170181 192.675105,318.962957 L155.680955,390.63785 C153.906059,394.078536 149.148181,394.481457 146.818249,391.391633 L1.42108547e-14,196.687365 L65.0616978,196.687365 Z M109.181234,2.09080071 L256,196.795792 L190.937786,196.795792 C166.178891,196.795792 142.859651,185.159487 127.972805,165.376003 L63.7949826,80.0891285 C62.5821413,78.477213 62.3992418,76.3134299 63.3243784,74.5208786 L100.318529,2.84428799 C102.093424,-0.594639809 106.851302,-0.9991491 109.181234,2.09080071 Z" fill="#6700EB"></path>
    </g>
    </svg>
  )
);

BlitzjsIcon.displayName = "BlitzjsIcon";

export const BlitzjsIconMetadata = {
  id: "blitzjs-icon",
  baseId: "blitzjs-icon",
  variant: "default",
  name: "Blitzjs Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 394",
} as const;

export default BlitzjsIcon;
