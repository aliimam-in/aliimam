/**
 * Auto-generated logo component: Unity (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UnityLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const UnityLogo = React.forwardRef<SVGSVGElement, UnityLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 263"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M166.9 131.2L212.8 52l22.2 79.2-22.2 79.3-46-79.3zm-22.4 13l46 79.2-80-20.5L52.6 144h91.8zM190.4 39l-45.9 79.3H52.7l57.7-58.8 80-20.5zm65.5 65.2L228 0 123.4 28l-15.5 27.2-31.4-.2L0 131.2l76.5 76.3 31.4-.2 15.5 27.2 104.5 27.9 28-104.2-15.9-27 16-27z" fill="#222C37" />
    </svg>
  )
);

UnityLogo.displayName = "UnityLogo";

export const UnityLogoMetadata = {
  id: "unity",
  baseId: "unity",
  variant: "default",
  name: "Unity",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 263",
} as const;

export default UnityLogo;
