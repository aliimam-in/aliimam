/**
 * Auto-generated logo component: X (default)
 * Category: social
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const X = React.forwardRef<SVGSVGElement, XProps>(
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
      <path d="M13.6881 10.1571L22.2504 0H20.2214L12.7868 8.81931L6.84879 0H0L8.97943 13.3364L0 23.9877H2.0291L9.88025 14.6742L16.1512 23.9877H23L13.6876 10.1571H13.6881ZM10.909 13.4538L9.99919 12.1258L2.76021 1.55881H5.87679L11.7187 10.0867L12.6285 11.4147L20.2224 22.4998H17.1058L10.909 13.4544V13.4538Z" />
    </svg>
  )
);

X.displayName = "X";

export const XMetadata = {
  id: "X",
  baseId: "X",
  variant: "default",
  name: "X",
  category: "social",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default X;
