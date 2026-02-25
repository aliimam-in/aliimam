/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SignLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SignLeftFilled = React.forwardRef<SVGSVGElement, SignLeftFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 2a1 1 0 0 1 .993 .883l.007 .117v2h3a1 1 0 0 1 .993 .883l.007 .117v5a1 1 0 0 1 -.883 .993l-.117 .007h-3v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-5a1 1 0 0 1 -.694 -.28l-.087 -.095l-2 -2.5a1 1 0 0 1 -.072 -1.147l.072 -.103l2 -2.5a1 1 0 0 1 .652 -.367l.129 -.008h5v-2a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
SignLeftFilled.displayName = "SignLeftFilled";
export const SignLeftFilledMetadata = { id: "sign-left_filled", baseId: "sign-left", variant: "filled", name: "Sign Left", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default SignLeftFilled;
