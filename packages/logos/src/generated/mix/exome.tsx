/**
 * Auto-generated logo component: Exome (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExomeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ExomeLogo = React.forwardRef<SVGSVGElement, ExomeLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 184 184"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#F5841B" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd"><path d="m23 173.5.1-.7v.7Zm37.7-42.6a278.3 278.3 0 0 1-27 19.3 379.5 379.5 0 0 1 52.7-64 378.5 378.5 0 0 1 64-52.6 272 272 0 0 1-19.5 27.1 50 50 0 0 1 10 22.4c31.8-37.5 48.9-70.3 39.6-79.6-11.8-11.7-60.8 18.4-109.6 67.2-48.9 48.8-79 97.9-67.2 109.6 9.3 9.3 42-7.7 79.4-39.3a50 50 0 0 1-22.4-10Zm113-108h-.7.6ZM161 10.3l-.1.7v-.7ZM11 160.8h-.6.7Z" /><path d="M11 23.1h.6a2 2 0 0 1-.7 0Zm75.8 74.7a378.6 378.6 0 0 1-52.6-64 274 274 0 0 1 26.2 18.8 50 50 0 0 1 22.2-10.4C45.6 11.1 13.3-5.5 4 3.7-7.6 15.4 22.5 64.5 71.3 113.3s97.9 79 109.6 67.2c9.3-9.3-7.8-42.3-39.8-80a50 50 0 0 1-10.2 22.2 304 304 0 0 1 20 27.7 378.6 378.6 0 0 1-64-52.6Zm74.7 75.9v-.7.7ZM174 161h-.7.7ZM23.6 11.2v-.7.7Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h184v184H0z" /></clipPath></defs>
    </svg>
  )
);

ExomeLogo.displayName = "ExomeLogo";

export const ExomeLogoMetadata = {
  id: "exome",
  baseId: "exome",
  variant: "default",
  name: "Exome",
  category: "mix",
  tags: [],
  viewBox: "0 0 184 184",
} as const;

export default ExomeLogo;
