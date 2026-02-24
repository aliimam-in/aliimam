/**
 * Auto-generated logo component: Eth (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EthLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const EthLogo = React.forwardRef<SVGSVGElement, EthLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs><linearGradient id="eth-c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FFF" stopOpacity=".5" /><stop offset="100%" stopOpacity=".5" /></linearGradient><circle id="eth-b" cx="16" cy="15" r="15" /><filter id="eth-a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5" /><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" /><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" /></filter><path id="eth-e" d="M16.4977734,20.9675435 L23.9999473,16.616495 L16.4977207,26.9946245 L16.4976173,26.9943278 L9,16.6164144 L16.4977734,20.9674935 Z M16.4977471,3.00004297 L23.9954941,15.2198561 L16.4977734,19.5730917 L9,15.2198561 L16.4977471,3.00004297 Z" /><filter id="eth-d" width="123.3%" height="114.6%" x="-11.7%" y="-5.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5" /><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" /><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" /></filter></defs><g fill="none" fillRule="evenodd"><use fill="#000" filter="url(#eth-a)" href="#eth-b" /><use fill="#627EEA" href="#eth-b" /><use fill="url(#eth-c)" style={{mixBlendMode:"soft-light"}} href="#eth-b" /><circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097" /><g fillRule="nonzero"><use fill="#000" filter="url(#eth-d)" href="#eth-e" /><use fill="#FFF" fillOpacity="0" fillRule="evenodd" href="#eth-e" /></g><g fill="#FFF" fillRule="nonzero" transform="translate(9 3)"><polygon fillOpacity=".602" points="7.498 0 7.498 8.87 14.995 12.22" /><polygon points="7.498 0 0 12.22 7.498 8.87" /><polygon fillOpacity=".602" points="7.498 17.968 7.498 23.995 15 13.616" /><polygon points="7.498 23.995 7.498 17.967 0 13.616" /><polygon fillOpacity=".2" points="7.498 16.573 14.995 12.22 7.498 8.872" /><polygon fillOpacity=".602" points="0 12.22 7.498 16.573 7.498 8.872" /></g></g>
    </svg>
  )
);

EthLogo.displayName = "EthLogo";

export const EthLogoMetadata = {
  id: "eth",
  baseId: "eth",
  variant: "default",
  name: "Eth",
  category: "mix",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default EthLogo;
