/**
 * Auto-generated logo component: Shadcn Ui (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShadcnUiDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ShadcnUiDark = React.forwardRef<SVGSVGElement, ShadcnUiDarkProps>(
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
      <path fill="none" d="M0 0h256v256H0z" /><path fill="none" stroke="#fff" strokeWidth="25" strokeLinecap="round" d="M208 128l-80 80M192 40L40 192" />
    </svg>
  )
);

ShadcnUiDark.displayName = "ShadcnUiDark";

export const ShadcnUiDarkMetadata = {
  id: "shadcn-ui_dark",
  baseId: "shadcn-ui",
  variant: "dark",
  name: "Shadcn Ui",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default ShadcnUiDark;
