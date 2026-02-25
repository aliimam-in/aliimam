/**
 * Auto-generated logo component: Rubygems (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RubygemsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Rubygems = React.forwardRef<SVGSVGElement, RubygemsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 293"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#D34231">
		<path d="M76.7478977,97.4337652 L76.585237,97.2711045 L40.4745594,133.381782 L128.148682,220.893244 L164.25936,184.945227 L215.822805,133.381782 L179.712127,97.2711045 L179.712127,97.1084438 L76.585237,97.1084438 L76.7478977,97.4337652 Z"></path>
		<path d="M127.823361,0.975964259 L0.1347034,74.1732837 L0.1347034,220.567923 L127.823361,293.765242 L255.512018,220.567923 L255.512018,74.1732837 L127.823361,0.975964259 L127.823361,0.975964259 Z M231.112911,206.579102 L127.823361,266.112921 L24.5338099,206.579102 L24.5338099,87.8367833 L127.823361,28.3029635 L231.112911,87.8367833 L231.112911,206.579102 L231.112911,206.579102 Z"></path>
	</g>
    </svg>
  )
);

Rubygems.displayName = "Rubygems";

export const RubygemsMetadata = {
  id: "rubygems",
  baseId: "rubygems",
  variant: "default",
  name: "Rubygems",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 293",
} as const;

export default Rubygems;
