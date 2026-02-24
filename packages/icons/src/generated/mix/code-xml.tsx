/**
 * Auto-generated logo component: Code Xml (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeXmlLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeXmlLogo = React.forwardRef<SVGSVGElement, CodeXmlLogoProps>(
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
      <path d="m18 16 4-4-4-4" />
  <path d="m6 8-4 4 4 4" />
  <path d="m14.5 4-5 16" />
    </svg>
  )
);

CodeXmlLogo.displayName = "CodeXmlLogo";

export const CodeXmlLogoMetadata = {
  id: "code-xml",
  baseId: "code-xml",
  variant: "default",
  name: "Code Xml",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeXmlLogo;
