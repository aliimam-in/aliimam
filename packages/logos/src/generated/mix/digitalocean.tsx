/**
 * Auto-generated logo component: Digitalocean (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DigitaloceanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DigitaloceanLogo = React.forwardRef<SVGSVGElement, DigitaloceanLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 -3.954 53.927 53.954"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#0080ff" fillRule="evenodd"><path d="M24.915 50v-9.661c10.226 0 18.164-10.141 14.237-20.904a14.438 14.438 0 0 0-8.615-8.616C19.774 6.921 9.633 14.83 9.633 25.056H0C0 8.758 15.763-3.954 32.853 1.384 40.311 3.73 46.271 9.661 48.588 17.12 53.927 34.237 41.243 50 24.915 50" /><path d="M15.339 40.367h9.604v-9.604H15.34zm-7.401 7.401h7.4v-7.4h-7.4zm-6.187-7.4h6.187V34.18H1.751z" /></g>
    </svg>
  )
);

DigitaloceanLogo.displayName = "DigitaloceanLogo";

export const DigitaloceanLogoMetadata = {
  id: "digitalocean",
  baseId: "digitalocean",
  variant: "default",
  name: "Digitalocean",
  category: "mix",
  tags: [],
  viewBox: "0 -3.954 53.927 53.954",
} as const;

export default DigitaloceanLogo;
