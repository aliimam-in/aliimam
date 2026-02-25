/**
 * Auto-generated logo component: Signpost Big (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignpostBigLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignpostBigLogo = React.forwardRef<SVGSVGElement, SignpostBigLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 9H4L2 7l2-2h6" />
  <path d="M14 5h6l2 2-2 2h-6" />
  <path d="M10 22V4a2 2 0 1 1 4 0v18" />
  <path d="M8 22h8" />
    </svg>
  )
);

SignpostBigLogo.displayName = "SignpostBigLogo";

export const SignpostBigLogoMetadata = {
  id: "signpost-big",
  baseId: "signpost-big",
  variant: "default",
  name: "Signpost Big",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignpostBigLogo;
