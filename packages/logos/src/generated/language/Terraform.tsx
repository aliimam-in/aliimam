/**
 * Auto-generated logo component: Terraform (default)
 * Category: language
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TerraformProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Terraform = React.forwardRef<SVGSVGElement, TerraformProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M8.848 5.83333L14.118 8.83333V14.8333L8.848 11.8333V5.83333ZM14.73 8.83333V14.8333L20 11.8333V5.83333L14.73 8.83333ZM3 2.5V8.5L8.27 11.5V5.5L3 2.5ZM8.848 18.5L14.118 21.5V15.5L8.848 12.5V18.5Z" />
    </svg>
  )
);

Terraform.displayName = "Terraform";

export const TerraformMetadata = {
  id: "Terraform",
  baseId: "Terraform",
  variant: "default",
  name: "Terraform",
  category: "language",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Terraform;
