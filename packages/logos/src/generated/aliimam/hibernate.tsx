/**
 * Auto-generated logo component: Hibernate (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HibernateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Hibernate = React.forwardRef<SVGSVGElement, HibernateProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 267"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M153.6714,178.9332 L152.7394,181.6902 L201.8764,265.0322 L204.6574,267.0002 L255.9994,178.2202 L204.6574,89.0832 L153.6714,178.9332 Z" fill="#59666C"></path>
		<path d="M50.2731,0.3039 L0.0001,89.0839 L52.2341,178.9329 L101.9721,89.0839 L101.8381,85.4529 L52.5651,2.1099 L50.2731,0.3039 Z" fill="#59666C"></path>
		<path d="M50.2731,0.3039 L101.9721,89.0839 L204.6571,89.0839 L152.6011,0.3039 L50.2731,0.3039 Z" fill="#BCAE79"></path>
		<path d="M52.2342,178.9332 L102.8642,267.0002 L204.6572,267.0002 L153.6712,178.9332 L52.2342,178.9332 Z" fill="#BCAE79"></path>
	</g>
    </svg>
  )
);

Hibernate.displayName = "Hibernate";

export const HibernateMetadata = {
  id: "hibernate",
  baseId: "hibernate",
  variant: "default",
  name: "Hibernate",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 267",
} as const;

export default Hibernate;
