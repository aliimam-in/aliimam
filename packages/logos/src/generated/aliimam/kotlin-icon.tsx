/**
 * Auto-generated logo component: Kotlin Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KotlinIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const KotlinIcon = React.forwardRef<SVGSVGElement, KotlinIconProps>(
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
        <linearGradient x1="99.9909179%" y1="-0.0107311249%" x2="0.00995772309%" y2="100.010253%" id="linearGradient-1">
            <stop stopColor="#E44857" offset="0.3435144%"></stop>
            <stop stopColor="#C711E1" offset="46.89%"></stop>
            <stop stopColor="#7F52FF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <polygon fill="url(#linearGradient-1)" fillRule="nonzero" points="256 256 0 256 0 0 256 0 128 127.948759"></polygon>
    </g>
    </svg>
  )
);

KotlinIcon.displayName = "KotlinIcon";

export const KotlinIconMetadata = {
  id: "kotlin-icon",
  baseId: "kotlin-icon",
  variant: "default",
  name: "Kotlin Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default KotlinIcon;
