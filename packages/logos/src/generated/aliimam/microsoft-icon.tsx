/**
 * Auto-generated logo component: Microsoft Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicrosoftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MicrosoftIcon = React.forwardRef<SVGSVGElement, MicrosoftIconProps>(
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
      <g>
        <polygon fill="#F1511B" points="121.666095 121.666095 0 121.666095 0 0 121.666095 0"></polygon>
        <polygon fill="#80CC28" points="256 121.666095 134.335356 121.666095 134.335356 0 256 0"></polygon>
        <polygon fill="#00ADEF" points="121.663194 256.002188 0 256.002188 0 134.336095 121.663194 134.336095"></polygon>
        <polygon fill="#FBBC09" points="256 256.002188 134.335356 256.002188 134.335356 134.336095 256 134.336095"></polygon>
    </g>
    </svg>
  )
);

MicrosoftIcon.displayName = "MicrosoftIcon";

export const MicrosoftIconMetadata = {
  id: "microsoft-icon",
  baseId: "microsoft-icon",
  variant: "default",
  name: "Microsoft Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default MicrosoftIcon;
