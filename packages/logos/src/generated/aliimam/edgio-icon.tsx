/**
 * Auto-generated logo component: Edgio Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EdgioIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const EdgioIcon = React.forwardRef<SVGSVGElement, EdgioIconProps>(
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
        <linearGradient x1="3.18474651%" y1="2.86627895%" x2="57.3248613%" y2="58.9172635%" id="edgioLinearGradient-1">
            <stop stopColor="#793092" offset="0%"></stop>
            <stop stopColor="#6144A1" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="104.36188%" cy="13.087638%" fx="104.36188%" fy="13.087638%" r="94.5754841%" id="edgioRadialGradient-2">
            <stop stopColor="#01B07D" offset="0%"></stop>
            <stop stopColor="#01B07D" stopOpacity="0" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="68.748982%" cy="120.915701%" fx="68.748982%" fy="120.915701%" r="68.4871381%" id="edgioRadialGradient-3">
            <stop stopColor="#00AAE5" offset="0%"></stop>
            <stop stopColor="#00AAE5" stopOpacity="0" offset="100%"></stop>
        </radialGradient>
    </defs>
    <g>
        <rect fill="url(#edgioLinearGradient-1)" x="0" y="0" width="256" height="256"></rect>
        <rect fill="url(#edgioRadialGradient-2)" x="0" y="0" width="256" height="256"></rect>
        <rect fill="url(#edgioRadialGradient-3)" x="0" y="0" width="256" height="256"></rect>
        <polygon fill="#FFFFFF" points="170.908427 77.2014079 187.133362 47.9481495 68.8666627 47.9481495 68.8666627 208.051403 187.133362 208.051403 170.989449 178.757831 100.749379 178.757831 100.749379 141.938707 156.504312 141.938707 165.486678 112.645136 100.749379 112.645136 100.749379 77.2014079"></polygon>
    </g>
    </svg>
  )
);

EdgioIcon.displayName = "EdgioIcon";

export const EdgioIconMetadata = {
  id: "edgio-icon",
  baseId: "edgio-icon",
  variant: "default",
  name: "Edgio Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default EdgioIcon;
