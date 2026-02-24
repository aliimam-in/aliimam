/**
 * Auto-generated logo component: Terraform (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TerraformLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TerraformLogo = React.forwardRef<SVGSVGElement, TerraformLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 50 72"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs></defs><path d="m17.2 17.5 15.5 9v18l-15.5-9v-18ZM34.5 26.5v18l15.5-9v-18l-15.5 9ZM0 7.5v18l15.5 9v-18L0 7.5ZM17.2 55.5l15.5 9v-18l-15.5-9v18Z" fill="#a067da" fillRule="evenodd" strokeWidth="0" />
    </svg>
  )
);

TerraformLogo.displayName = "TerraformLogo";

export const TerraformLogoMetadata = {
  id: "terraform",
  baseId: "terraform",
  variant: "default",
  name: "Terraform",
  category: "mix",
  tags: [],
  viewBox: "0 0 50 72",
} as const;

export default TerraformLogo;
