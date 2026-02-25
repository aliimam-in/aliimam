/**
 * Auto-generated logo component: Code Asterisk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodeAsteriskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CodeAsteriskOutlineLogo = React.forwardRef<SVGSVGElement, CodeAsteriskOutlineLogoProps>(
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
      <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
  <path d="M12 11.875l3 -1.687" />
  <path d="M12 11.875v3.375" />
  <path d="M12 11.875l-3 -1.687" />
  <path d="M12 11.875l3 1.688" />
  <path d="M12 8.5v3.375" />
  <path d="M12 11.875l-3 1.688" />
  <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
    </svg>
  )
);

CodeAsteriskOutlineLogo.displayName = "CodeAsteriskOutlineLogo";

export const CodeAsteriskOutlineLogoMetadata = {
  id: "code-asterisk-outline",
  baseId: "code-asterisk-outline",
  variant: "default",
  name: "Code Asterisk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CodeAsteriskOutlineLogo;
