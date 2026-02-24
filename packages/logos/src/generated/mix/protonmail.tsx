/**
 * Auto-generated logo component: Protonmail (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ProtonmailLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ProtonmailLogo = React.forwardRef<SVGSVGElement, ProtonmailLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 918 745"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)"><path fill="url(#b)" fillRule="evenodd" d="M723.149 140.476v604.98h100.286c52.441 0 94.939-43.084 94.939-96.133V21.947c0-18.125-20.827-27.995-34.617-16.417z" clipRule="evenodd" /><path fill="url(#c)" fillRule="evenodd" d="m583.274 258.151-183.217 163.89c-31.239 27.9-77.864 28.564-109.855 1.613L.227 179.574V22.042c0-18.125 20.826-28.09 34.617-16.512L398.65 311.294a94.056 94.056 0 0 0 121.394 0z" clipRule="evenodd" /><path fill="url(#d)" d="m723.149 140.571-139.875 117.58.094-.001-183.311 163.891c-31.239 27.9-77.864 28.564-109.855 1.613L.227 179.574v469.749c0 53.049 42.497 96.133 94.938 96.133H723.15z" /></g><defs><linearGradient id="b" x1="2304.04" x2="2116.29" y1="1228.39" y2="-635.265" gradientUnits="userSpaceOnUse"><stop offset=".271" stopColor="#e3d9ff" /><stop offset="1" stopColor="#7341ff" /></linearGradient><linearGradient id="c" x1="542.753" x2="160.929" y1="752.371" y2="-755.454" gradientUnits="userSpaceOnUse"><stop stopColor="#e3d9ff" /><stop offset="1" stopColor="#7341ff" /></linearGradient><radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="matrix(1070.72 0 0 1083.11 914.374 91.728)" gradientUnits="userSpaceOnUse"><stop offset=".556" stopColor="#6d4aff" /><stop offset=".994" stopColor="#aa8eff" /></radialGradient><clipPath id="a"><path fill="#fff" d="M0 0h918v745H0z" /></clipPath></defs>
    </svg>
  )
);

ProtonmailLogo.displayName = "ProtonmailLogo";

export const ProtonmailLogoMetadata = {
  id: "protonmail",
  baseId: "protonmail",
  variant: "default",
  name: "Protonmail",
  category: "mix",
  tags: [],
  viewBox: "0 0 918 745",
} as const;

export default ProtonmailLogo;
