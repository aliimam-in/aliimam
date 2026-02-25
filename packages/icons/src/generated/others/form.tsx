/**
 * Auto-generated logo component: Form (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FormLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FormLogo = React.forwardRef<SVGSVGElement, FormLogoProps>(
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
      <path d="M4 14h6" />
  <path d="M4 2h10" />
  <rect x="4" y="18" width="16" height="4" rx="1" />
  <rect x="4" y="6" width="16" height="4" rx="1" />
    </svg>
  )
);

FormLogo.displayName = "FormLogo";

export const FormLogoMetadata = {
  id: "form",
  baseId: "form",
  variant: "default",
  name: "Form",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FormLogo;
