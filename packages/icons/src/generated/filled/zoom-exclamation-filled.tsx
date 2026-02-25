/**
 * Auto-generated logo component: Zoom Exclamation Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZoomExclamationFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZoomExclamationFilledLogo = React.forwardRef<SVGSVGElement, ZoomExclamationFilledLogoProps>(
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
      <path d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1 -1.414 1.414l-5.388 -5.387a8 8 0 0 1 -12.905 -6.32l.005 -.285a8 8 0 0 1 11.995 -6.643m-4 8.928a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883m0 -6a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

ZoomExclamationFilledLogo.displayName = "ZoomExclamationFilledLogo";

export const ZoomExclamationFilledLogoMetadata = {
  id: "zoom-exclamation-filled",
  baseId: "zoom-exclamation-filled",
  variant: "default",
  name: "Zoom Exclamation Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZoomExclamationFilledLogo;
