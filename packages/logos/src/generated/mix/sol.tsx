/**
 * Auto-generated logo component: Sol (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SolLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SolLogo = React.forwardRef<SVGSVGElement, SolLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs><linearGradient x1="90.737%" y1="34.776%" x2="35.509%" y2="55.415%" id="a"><stop stopColor="#00FFA3" offset="0%" /><stop stopColor="#DC1FFF" offset="100%" /></linearGradient><linearGradient x1="66.588%" y1="43.8%" x2="11.36%" y2="64.439%" id="b"><stop stopColor="#00FFA3" offset="0%" /><stop stopColor="#DC1FFF" offset="100%" /></linearGradient><linearGradient x1="78.586%" y1="39.317%" x2="23.358%" y2="59.956%" id="c"><stop stopColor="#00FFA3" offset="0%" /><stop stopColor="#DC1FFF" offset="100%" /></linearGradient></defs><g fill="none" fillRule="nonzero"><circle fill="#181E33" cx="18" cy="18" r="18" /><path d="M3.9 14.355a.785.785 0 0 1 .554-.23h19.153c.35 0 .525.423.277.67l-3.783 3.784a.785.785 0 0 1-.555.23H.393a.392.392 0 0 1-.277-.67l3.783-3.784z" fill="url(#a)" transform="translate(6 9)" /><path d="M3.9.23c.15-.146.35-.23.554-.23h19.153c.35 0 .525.422.277.67l-3.783 3.783a.785.785 0 0 1-.555.23H.393a.392.392 0 0 1-.277-.67L3.899.229z" fill="url(#b)" transform="translate(6 9)" /><path d="M20.1 7.247a.785.785 0 0 0-.554-.23H.393a.392.392 0 0 0-.277.67l3.783 3.784c.145.145.344.23.555.23h19.153c.35 0 .525-.423.277-.67l-3.783-3.784z" fill="url(#c)" transform="translate(6 9)" /></g>
    </svg>
  )
);

SolLogo.displayName = "SolLogo";

export const SolLogoMetadata = {
  id: "sol",
  baseId: "sol",
  variant: "default",
  name: "Sol",
  category: "mix",
  tags: [],
  viewBox: "0 0 36 36",
} as const;

export default SolLogo;
