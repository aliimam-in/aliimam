/**
 * Auto-generated logo component: Sails (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SailsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Sails = React.forwardRef<SVGSVGElement, SailsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#28A3B2">
		<path d="M24.3404299,255.334258 C24.3404299,255.334258 -73.0918953,100.291201 127.341014,0.456539689 L127.341014,255.334258 L24.3404299,255.334258"></path>
		<path d="M158.372638,255.334258 L158.372638,97.3588866 C158.372638,97.3588866 190.363104,149.565235 255.376099,255.334258 L158.372638,255.334258"></path>
	</g>
    </svg>
  )
);

Sails.displayName = "Sails";

export const SailsMetadata = {
  id: "sails",
  baseId: "sails",
  variant: "default",
  name: "Sails",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Sails;
