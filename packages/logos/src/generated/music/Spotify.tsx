/**
 * Auto-generated logo component: Spotify (default)
 * Category: music
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpotifyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Spotify = React.forwardRef<SVGSVGElement, SpotifyProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2066_1180)" filter="url(#filter0_d_2066_1180)">
<path d="M16 0C9.37262 0 4 5.37272 4 12C4 18.6278 9.37272 24 16 24C22.6278 24 28 18.6278 28 12C28 5.37319 22.6278 0.00065625 15.9998 0.00065625L15.9999 9.375e-05L16 0ZM21.503 17.3076C21.2881 17.6601 20.8266 17.7718 20.4741 17.5554C17.6567 15.8345 14.1099 15.4447 9.93288 16.399C9.73945 16.443 9.53646 16.4085 9.36854 16.3028C9.20061 16.1972 9.08149 16.0293 9.03737 15.8359C9.01539 15.7401 9.01251 15.641 9.02889 15.5441C9.04527 15.4473 9.0806 15.3546 9.13285 15.2714C9.1851 15.1882 9.25324 15.1161 9.33338 15.0593C9.41352 15.0025 9.50408 14.9621 9.59987 14.9403C14.1711 13.8959 18.092 14.3455 21.2552 16.2787C21.6077 16.495 21.7194 16.9551 21.503 17.3076ZM22.9718 14.0401C22.7009 14.4803 22.1249 14.6193 21.685 14.3484C18.4594 12.3658 13.5425 11.7916 9.72738 12.9497C9.23256 13.0991 8.71 12.8203 8.55981 12.3263C8.41075 11.8315 8.68975 11.3099 9.18372 11.1595C13.5417 9.83709 18.9595 10.4777 22.6637 12.7539C23.1036 13.0249 23.2427 13.6008 22.9718 14.0401ZM23.0979 10.6376C19.2303 8.34037 12.8494 8.12906 9.15691 9.24994C8.56394 9.42975 7.93684 9.09497 7.75722 8.502C7.5775 7.90875 7.91191 7.28212 8.50534 7.10184C12.7441 5.81503 19.7907 6.06375 24.2433 8.70712C24.7779 9.02363 24.9527 9.7125 24.636 10.2451C24.3208 10.7785 23.63 10.9543 23.0985 10.6376H23.0979Z" fill="#1ED760"/>
</g>
<defs>
<filter id="filter0_d_2066_1180" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2066_1180"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2066_1180" result="shape"/>
</filter>
<clipPath id="clip0_2066_1180">
<rect width="24" height="24" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
    </svg>
  )
);

Spotify.displayName = "Spotify";

export const SpotifyMetadata = {
  id: "Spotify",
  baseId: "Spotify",
  variant: "default",
  name: "Spotify",
  category: "music",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Spotify;
