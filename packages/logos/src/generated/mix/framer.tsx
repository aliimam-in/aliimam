/**
 * Auto-generated logo component: Framer (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FramerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FramerLogo = React.forwardRef<SVGSVGElement, FramerLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 384"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z" />
    </svg>
  )
);

FramerLogo.displayName = "FramerLogo";

export const FramerLogoMetadata = {
  id: "framer",
  baseId: "framer",
  variant: "default",
  name: "Framer",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 384",
} as const;

export default FramerLogo;
