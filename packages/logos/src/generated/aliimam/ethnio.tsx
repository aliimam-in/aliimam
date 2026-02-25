/**
 * Auto-generated logo component: Ethnio (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EthnioProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Ethnio = React.forwardRef<SVGSVGElement, EthnioProps>(
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
      <g>
        <path d="M128,0 C198.687347,0 256,57.3126531 256,128 C256,198.687347 198.687347,256 128,256 C57.3126531,256 0,198.687347 0,128 C0,57.3126531 57.3126531,0 128,0 Z" fill="#24373E"></path>
        <path d="M128,46.9681633 C172.773878,46.9681633 208.979592,83.2783673 208.979592,127.947755 C208.979592,172.617143 172.669388,208.927347 128,208.927347 C83.3306122,208.927347 47.0204082,172.721633 47.0204082,127.947755 C47.0204082,83.2783673 83.2783673,46.9681633 128,46.9681633 Z" fill="#F8F4EF"></path>
        <path d="M128,79.7779592 C154.592653,79.7779592 176.222041,101.355102 176.222041,128 C176.222041,154.644898 154.644898,176.222041 128,176.222041 C101.355102,176.222041 79.7779592,154.592653 79.7779592,127.947755 C79.7779592,101.302857 101.355102,79.7779592 128,79.7779592 Z" fill="#8EB0BD"></path>
    </g>
    </svg>
  )
);

Ethnio.displayName = "Ethnio";

export const EthnioMetadata = {
  id: "ethnio",
  baseId: "ethnio",
  variant: "default",
  name: "Ethnio",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Ethnio;
