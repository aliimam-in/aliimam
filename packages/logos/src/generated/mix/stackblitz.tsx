/**
 * Auto-generated logo component: Stackblitz (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackblitzLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const StackblitzLogo = React.forwardRef<SVGSVGElement, StackblitzLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 368"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#49A2F8" d="M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z" />
    </svg>
  )
);

StackblitzLogo.displayName = "StackblitzLogo";

export const StackblitzLogoMetadata = {
  id: "stackblitz",
  baseId: "stackblitz",
  variant: "default",
  name: "Stackblitz",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 368",
} as const;

export default StackblitzLogo;
