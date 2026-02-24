/**
 * Auto-generated logo component: Sublimetext (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SublimetextLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SublimetextLogo = React.forwardRef<SVGSVGElement, SublimetextLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 332"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs><linearGradient x1="55.117%" y1="58.68%" x2="63.68%" y2="39.597%" id="a"><stop stopColor="#FF9700" offset="0%" /><stop stopColor="#F48E00" offset="53%" /><stop stopColor="#D06F00" offset="100%" /></linearGradient></defs><path d="M255.288 166.795c0-3.887-2.872-6.128-6.397-5.015L6.397 238.675C2.865 239.796 0 243.86 0 247.74v78.59c0 3.887 2.865 6.135 6.397 5.015l242.494-76.888c3.525-1.12 6.397-5.185 6.397-9.071v-78.59Z" fill="url(#a)" /><path d="M0 164.291c0 3.887 2.865 7.95 6.397 9.071l242.53 76.902c3.531 1.12 6.397-1.127 6.397-5.007V166.66c0-3.88-2.866-7.944-6.397-9.064L6.397 80.694C2.865 79.574 0 81.814 0 85.7v78.59Z" fill="#FF9800" /><path d="M255.288 5.302c0-3.886-2.872-6.135-6.397-5.014L6.397 77.176C2.865 78.296 0 82.36 0 86.247v78.59c0 3.887 2.865 6.128 6.397 5.014l242.494-76.895c3.525-1.12 6.397-5.184 6.397-9.064V5.302Z" fill="#FF9800" />
    </svg>
  )
);

SublimetextLogo.displayName = "SublimetextLogo";

export const SublimetextLogoMetadata = {
  id: "sublimetext",
  baseId: "sublimetext",
  variant: "default",
  name: "Sublimetext",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 332",
} as const;

export default SublimetextLogo;
