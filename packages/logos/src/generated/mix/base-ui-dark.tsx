/**
 * Auto-generated logo component: Base Ui Dark (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaseUiDarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BaseUiDarkLogo = React.forwardRef<SVGSVGElement, BaseUiDarkLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 17 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.5 7.015A.477.477 0 0 0 9 7.5V23a8 8 0 0 0 .5-15.985ZM8 9.8V23c-4.418 0-8-3.94-8-8.8V1c4.418 0 8 3.94 8 8.8Z" />
    </svg>
  )
);

BaseUiDarkLogo.displayName = "BaseUiDarkLogo";

export const BaseUiDarkLogoMetadata = {
  id: "base-ui-dark",
  baseId: "base-ui-dark",
  variant: "default",
  name: "Base Ui Dark",
  category: "mix",
  tags: [],
  viewBox: "0 0 17 24",
} as const;

export default BaseUiDarkLogo;
