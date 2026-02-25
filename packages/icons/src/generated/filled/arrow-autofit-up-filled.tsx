/**
 * Auto-generated logo component: Arrow Autofit Up Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowAutofitUpFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowAutofitUpFilledLogo = React.forwardRef<SVGSVGElement, ArrowAutofitUpFilledLogoProps>(
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
      <path d="M14 21a1 1 0 0 0 1 -1v-11.001h-.092a3 3 0 0 1 -2.03 -5.12a.515 .515 0 0 0 -.363 -.879h-6.515a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3z" />
  <path d="M18 21a1 1 0 0 0 1 -1v-14.584l1.293 1.291a1 1 0 0 0 1.32 .083l.094 -.083a1 1 0 0 0 0 -1.414l-3 -3a1 1 0 0 0 -.112 -.097l-.11 -.071l-.114 -.054l-.105 -.035l-.149 -.03l-.117 -.006l-.075 .003l-.126 .017l-.111 .03l-.111 .044l-.098 .052l-.096 .067l-.09 .08l-3 3a1 1 0 1 0 1.414 1.414l1.293 -1.293v14.586a1 1 0 0 0 1 1" />
    </svg>
  )
);

ArrowAutofitUpFilledLogo.displayName = "ArrowAutofitUpFilledLogo";

export const ArrowAutofitUpFilledLogoMetadata = {
  id: "arrow-autofit-up-filled",
  baseId: "arrow-autofit-up-filled",
  variant: "default",
  name: "Arrow Autofit Up Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowAutofitUpFilledLogo;
