import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NewZealand: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NewZealand(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeDasharray={strokeDasharray}
      opacity={opacity}
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#071b65"
      />
      <path
        d="M6.5 13.774V16H10.5V13.773L13.537 16H16V14.759L12.238 12H16V8H13.26L16 5.991V4H14.559L10.5 6.977V4H6.5V6.794L3.243 4.405C2.476 4.779 1.854 5.388 1.457 6.143L3.989 8.001H1V12.001H4.763L1 14.761V16.001H3.464L6.5 13.774Z"
        fill="#fff"
      />
      <path
        d="M1.806 5.589 5.091 8H6.455L2.36 4.995C2.156 5.175 1.97 5.372 1.806 5.589ZM1 16 6.454 12V13L2.363 16H1Z"
        fill="#b92831"
      />
      <path d="M9.5 16H7.5V11H1V9H7.5V4H9.5V9H16V11H9.5V16Z" fill="#b92831" />
      <path
        d="M16 15.667 11 12V13L15.091 16H16V15.667ZM16 4H15.752L10.291 8.004H11.655L16 4.818V4ZM23.495 8.062 23.008 9.56H21.433L22.707 10.486 22.22 11.984 23.495 11.058 24.769 11.984 24.282 10.486 25.556 9.56H23.981L23.495 8.062Z"
        fill="#b92831"
      />
      <path
        d="M25.007 12.311L23.495 11.213L21.983 12.311L22.561 10.534L21.049 9.43496H22.9179L23.496 7.65796L24.0739 9.43496H25.943L24.431 10.534L25.009 12.311H25.007ZM23.495 10.904L24.5319 11.656L24.136 10.438L25.172 9.68496H23.891L23.495 8.46596L23.099 9.68496H21.818L22.854 10.438L22.458 11.656L23.495 10.904Z"
        fill="#fff"
      />
      <path
        d="M23.495 19.0759L23.008 20.5739H21.433L22.707 21.4999L22.22 22.9979L23.495 22.0719L24.769 22.9979L24.282 21.4999L25.556 20.5739H23.981L23.495 19.0759Z"
        fill="#b92831"
      />
      <path
        d="M25.007 23.3251L23.495 22.2261L21.983 23.3251L22.561 21.5481L21.049 20.4491H22.9179L23.496 18.6721L24.0739 20.4491H25.943L24.431 21.5481L25.009 23.3251H25.007ZM23.495 21.9181L24.5319 22.6711L24.136 21.4521L25.172 20.6991H23.891L23.495 19.4801L23.099 20.6991H21.818L22.854 21.4521L22.458 22.6711L23.495 21.9181Z"
        fill="#fff"
      />
      <path
        d="M27.503 12.7739L27.111 13.9829H25.84L26.868 14.7299L26.475 15.9379L27.503 15.1909L28.531 15.9379L28.139 14.7299L29.167 13.9829H27.896L27.503 12.7739Z"
        fill="#b92831"
      />
      <path
        d="M28.769 16.2651L27.503 15.3451L26.237 16.2651L26.72 14.7771L25.454 13.8581H27.018L27.501 12.3701L27.984 13.8581H29.548L28.282 14.7771L28.765 16.2651H28.769ZM27.503 15.0361L28.293 15.6101L27.991 14.6811L28.781 14.1071H27.804L27.502 13.1781L27.2 14.1071H26.223L27.013 14.6811L26.711 15.6101L27.501 15.0361H27.503Z"
        fill="#fff"
      />
      <path
        d="M19.77 13.417L19.377 14.625H18.106L19.134 15.372L18.742 16.58L19.77 15.833L20.798 16.58L20.405 15.372L21.433 14.625H20.162L19.77 13.417Z"
        fill="#b92831"
      />
      <path
        d="M21.035 16.907L19.769 15.988L18.503 16.907L18.986 15.42L17.72 14.5H19.284L19.767 13.012L20.25 14.5H21.815L20.549 15.42L21.032 16.907H21.035ZM19.769 15.679L20.559 16.253L20.257 15.324L21.048 14.75H20.071L19.769 13.821L19.467 14.75H18.49L19.28 15.324L18.978 16.253L19.769 15.679Z"
        fill="#fff"
      />
    </svg>
  );
});

NewZealand.displayName = "NewZealand";

NewZealand.metadata = {
  name: "NewZealand",
  category: "symbols/flags",
  tags: ["new", "zealand", "icon"],
  description: "NewZealand icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NewZealand;
