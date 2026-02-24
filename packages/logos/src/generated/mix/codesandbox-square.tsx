/**
 * Auto-generated logo component: Codesandbox Square (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodesandboxSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CodesandboxSquareLogo = React.forwardRef<SVGSVGElement, CodesandboxSquareLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 600 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#DCFF50" fillRule="evenodd" d="M150 150h299.832v300H150V150Zm269.168 30.682v238.636H180.665V180.682h238.503Z" clipRule="evenodd" />
    </svg>
  )
);

CodesandboxSquareLogo.displayName = "CodesandboxSquareLogo";

export const CodesandboxSquareLogoMetadata = {
  id: "codesandbox-square",
  baseId: "codesandbox-square",
  variant: "default",
  name: "Codesandbox Square",
  category: "mix",
  tags: [],
  viewBox: "0 0 600 600",
} as const;

export default CodesandboxSquareLogo;
