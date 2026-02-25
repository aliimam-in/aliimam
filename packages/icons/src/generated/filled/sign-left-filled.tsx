/**
 * Auto-generated logo component: Sign Left Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SignLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SignLeftFilledLogo = React.forwardRef<SVGSVGElement, SignLeftFilledLogoProps>(
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
      <path d="M14 2a1 1 0 0 1 .993 .883l.007 .117v2h3a1 1 0 0 1 .993 .883l.007 .117v5a1 1 0 0 1 -.883 .993l-.117 .007h-3v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-5a1 1 0 0 1 -.694 -.28l-.087 -.095l-2 -2.5a1 1 0 0 1 -.072 -1.147l.072 -.103l2 -2.5a1 1 0 0 1 .652 -.367l.129 -.008h5v-2a1 1 0 0 1 1 -1z" />
    </svg>
  )
);

SignLeftFilledLogo.displayName = "SignLeftFilledLogo";

export const SignLeftFilledLogoMetadata = {
  id: "sign-left-filled",
  baseId: "sign-left-filled",
  variant: "default",
  name: "Sign Left Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SignLeftFilledLogo;
