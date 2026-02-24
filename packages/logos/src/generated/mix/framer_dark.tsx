/**
 * Auto-generated logo component: Framer (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FramerDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FramerDark = React.forwardRef<SVGSVGElement, FramerDarkProps>(
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
      <path fill="#fff" d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z" />
    </svg>
  )
);

FramerDark.displayName = "FramerDark";

export const FramerDarkMetadata = {
  id: "framer_dark",
  baseId: "framer",
  variant: "dark",
  name: "Framer",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 384",
} as const;

export default FramerDark;
