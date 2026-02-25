/**
 * Auto-generated logo component: Arrow Autofit Left Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowAutofitLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowAutofitLeftFilledLogo = React.forwardRef<SVGSVGElement, ArrowAutofitLeftFilledLogoProps>(
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
      <path d="M21 14a1 1 0 0 1 -1 1h-11.001v-.092a3 3 0 0 0 -5.12 -2.03a.515 .515 0 0 1 -.879 -.363v-6.515a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3z" />
  <path d="M21 18a1 1 0 0 1 -1 1h-14.584l1.291 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 -.097 -.112l-.071 -.11l-.054 -.114l-.035 -.105l-.03 -.149l-.006 -.117l.003 -.075l.017 -.126l.03 -.111l.044 -.111l.052 -.098l.067 -.096l.08 -.09l3 -3a1 1 0 1 1 1.414 1.414l-1.293 1.293h14.586a1 1 0 0 1 1 1" />
    </svg>
  )
);

ArrowAutofitLeftFilledLogo.displayName = "ArrowAutofitLeftFilledLogo";

export const ArrowAutofitLeftFilledLogoMetadata = {
  id: "arrow-autofit-left-filled",
  baseId: "arrow-autofit-left-filled",
  variant: "default",
  name: "Arrow Autofit Left Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowAutofitLeftFilledLogo;
