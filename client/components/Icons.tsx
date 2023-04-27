import React from "react";
interface IIcons {
  color: string;
  opacity?: number;
}
export const Oval1: React.SFC<IIcons> = ({ color, opacity = 1 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
    <path
      d="M45 90c24.853 0 45-24.158 45-45.5S69.853 0 45 0 0 11.166 0 36.019C0 60.87 20.147 90 45 90z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);
export const Oval2: React.SFC<IIcons> = ({ color, opacity }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 90">
    <path
      d="M46.376 90c24.891 0 49.67-21.374 45.069-45-4.6-23.626-20.178-45-45.069-45C21.486 0 9.025 21.67 1.308 45c-7.717 23.33 20.178 45 45.068 45z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);
export const Oval3: React.SFC<IIcons> = ({ color, opacity }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 91">
    <path
      d="M45 89.831c21.968 7.197 45-20.195 45-45.108C90 19.811 78.469 0 53.616 0S0 19.81 0 44.723s23.032 37.912 45 45.108z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);
export const Oval4: React.SFC<IIcons> = ({ color, opacity }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 91">
    <path
      d="M45 89.831c21.968 7.197 45-20.195 45-45.108C90 19.811 78.469 0 53.616 0S0 19.81 0 44.723s23.032 37.912 45 45.108z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);

export const Share: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 42">
    <path
      d="M31.595 26.983c-2.38 0-4.501 1.15-5.858 2.93l-11.365-6.445a7.637 7.637 0 00.412-2.477c0-.872-.146-1.7-.421-2.485l11.356-6.436c1.35 1.788 3.48 2.947 5.868 2.947 4.071 0 7.396-3.366 7.396-7.508C38.983 3.366 35.667 0 31.587 0S24.19 3.366 24.19 7.509c0 .872.146 1.709.421 2.485L13.263 16.43a7.323 7.323 0 00-5.867-2.947C3.324 13.483 0 16.849 0 20.99 0 25.134 3.324 28.5 7.405 28.5c2.388 0 4.518-1.16 5.876-2.956l11.356 6.444a7.577 7.577 0 00-.43 2.503c0 4.134 3.316 7.509 7.397 7.509C35.684 42 39 38.634 39 34.491c0-4.142-3.324-7.508-7.405-7.508zm0-24.62c2.8 0 5.077 2.311 5.077 5.154s-2.276 5.155-5.077 5.155c-2.8 0-5.077-2.312-5.077-5.155 0-2.843 2.285-5.154 5.077-5.154zM7.405 26.145c-2.8 0-5.077-2.31-5.077-5.154 0-2.843 2.276-5.154 5.077-5.154 2.8 0 5.077 2.311 5.077 5.154s-2.285 5.154-5.077 5.154zm24.19 13.492c-2.8 0-5.077-2.311-5.077-5.154s2.277-5.155 5.077-5.155 5.077 2.312 5.077 5.155c0 2.843-2.276 5.154-5.077 5.154z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);
export const Iframe: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.997 511.997">
    <path
      fill={color}
      d="M506.76 242.828l-118.4-125.44c-7.277-7.718-19.424-8.07-27.142-.787-7.706 7.277-8.064 19.43-.781 27.142l105.965 112.256-105.965 112.269c-7.283 7.712-6.925 19.859.781 27.142a19.151 19.151 0 0013.178 5.235 19.172 19.172 0 0013.965-6.01l118.4-125.446c6.981-7.404 6.981-18.963-.001-26.361zM151.566 368.262L45.608 255.999l105.958-112.262c7.277-7.712 6.925-19.866-.787-27.142-7.706-7.277-19.866-6.925-27.142.787l-118.4 125.44c-6.982 7.398-6.982 18.963 0 26.362L123.643 394.63c3.776 4 8.864 6.016 13.965 6.016 4.723 0 9.466-1.741 13.171-5.242 7.719-7.277 8.064-19.43.787-27.142zM287.061 52.697c-10.477-1.587-20.282 5.606-21.882 16.083l-56.32 368.64c-1.6 10.483 5.6 20.282 16.083 21.882.986.147 1.958.218 2.925.218 9.325 0 17.504-6.803 18.957-16.301l56.32-368.64c1.6-10.484-5.6-20.282-16.083-21.882z"
    />
  </svg>
);
export const Table: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32">
    <path
      d="M33.72 0H1.28C.574 0 0 .578 0 1.29v29.42C0 31.422.573 32 1.28 32h32.44c.707 0 1.28-.578 1.28-1.29V1.29C35 .578 34.427 0 33.72 0zM16.231 29.42H2.56v-7.227h13.67v7.227zm0-9.807H2.56v-7.226h13.67v7.226zm16.207 9.807H18.793v-7.227h13.646v7.227zm0-9.807H18.793v-7.226h13.646v7.226zm0-9.806H2.561V2.58h29.878v7.227z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);

export const Gear: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
    <g fill={color} fillRule="nonzero">
      <path d="M33.208 13.826l-2.456-.417a13.872 13.872 0 00-.987-2.383L31.212 9c.614-.862.52-2.04-.234-2.785L28.8 4.035a2.146 2.146 0 00-2.779-.233L23.99 5.25c-.79-.417-1.616-.76-2.472-1.017l-.409-2.427A2.16 2.16 0 0018.973 0h-3.078c-1.06 0-1.96.76-2.135 1.806l-.424 2.486a13.53 13.53 0 00-2.376 1.002L8.95 3.846a2.146 2.146 0 00-1.258-.402c-.578 0-1.126.226-1.529.636L3.977 6.259a2.164 2.164 0 00-.234 2.785L5.206 11.1a13.55 13.55 0 00-.973 2.39l-2.427.41A2.16 2.16 0 000 16.034v3.078c0 1.06.76 1.96 1.806 2.135l2.486.424a13.53 13.53 0 001.001 2.376l-1.44 2.004c-.614.863-.519 2.04.234 2.785l2.179 2.18a2.146 2.146 0 002.778.233l2.055-1.462c.738.387 1.513.702 2.31.95l.41 2.457A2.16 2.16 0 0015.953 35h3.086c1.06 0 1.96-.76 2.135-1.806l.417-2.457a13.871 13.871 0 002.383-.987l2.025 1.448c.366.263.805.402 1.258.402.577 0 1.118-.226 1.528-.636l2.179-2.179A2.164 2.164 0 0031.198 26l-1.448-2.033c.402-.768.738-1.565.987-2.384l2.457-.409A2.16 2.16 0 0035 19.039v-3.078a2.134 2.134 0 00-1.792-2.135zm-.168 5.213a.19.19 0 01-.16.19l-3.071.512a.982.982 0 00-.79.724 11.705 11.705 0 01-1.272 3.063.989.989 0 00.044 1.075l1.805 2.544a.2.2 0 01-.021.25l-2.18 2.178a.186.186 0 01-.138.058.18.18 0 01-.11-.036L24.61 27.79a.988.988 0 00-1.075-.044c-.957.57-1.988.994-3.063 1.272a.97.97 0 00-.724.79l-.52 3.07a.19.19 0 01-.19.162h-3.077a.19.19 0 01-.19-.161l-.512-3.071a.982.982 0 00-.724-.79 12.153 12.153 0 01-2.998-1.228 1.012 1.012 0 00-.497-.132.963.963 0 00-.57.183l-2.56 1.82a.218.218 0 01-.109.037.196.196 0 01-.139-.058l-2.178-2.18a.198.198 0 01-.022-.248l1.798-2.522c.227-.322.241-.746.044-1.082a11.594 11.594 0 01-1.287-3.056 1.001 1.001 0 00-.79-.724l-3.092-.527a.19.19 0 01-.16-.19v-3.078a.19.19 0 01.16-.19l3.049-.512a.989.989 0 00.797-.731c.27-1.075.687-2.113 1.25-3.07a.976.976 0 00-.051-1.068l-1.82-2.56a.2.2 0 01.021-.248L7.56 5.476a.186.186 0 01.139-.058.18.18 0 01.11.036l2.522 1.799a1 1 0 001.082.044c.95-.57 1.981-1.01 3.056-1.287.373-.102.658-.41.724-.79l.526-3.092a.19.19 0 01.19-.161h3.079a.19.19 0 01.19.16l.512 3.05c.065.387.35.701.73.796 1.105.278 2.158.71 3.137 1.287a.989.989 0 001.075-.044l2.522-1.813a.218.218 0 01.11-.036c.03 0 .088.007.14.058l2.178 2.179a.198.198 0 01.022.249l-1.806 2.537a.988.988 0 00-.044 1.074c.57.958.994 1.99 1.272 3.064a.97.97 0 00.79.724l3.07.519a.19.19 0 01.161.19v3.078h-.007z" />
      <path d="M17.5 10a7.505 7.505 0 00-7.5 7.5c0 4.138 3.362 7.5 7.5 7.5s7.5-3.362 7.5-7.5-3.362-7.5-7.5-7.5zm0 13.04a5.543 5.543 0 01-5.54-5.54 5.543 5.543 0 015.54-5.54 5.543 5.543 0 015.54 5.54 5.543 5.543 0 01-5.54 5.54z" />
    </g>
  </svg>
);

export const MagnifyingGlass: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 33">
    <path
      d="M30.529 30.058l-7.642-8.169a13.504 13.504 0 003.041-8.565C25.928 5.977 20.112 0 12.964 0 5.816 0 0 5.977 0 13.324c0 7.346 5.816 13.323 12.964 13.323 2.684 0 5.24-.831 7.427-2.41l7.7 8.23a1.656 1.656 0 002.39.048 1.774 1.774 0 00.048-2.457zM12.964 3.476c5.284 0 9.582 4.417 9.582 9.848 0 5.43-4.298 9.848-9.582 9.848-5.284 0-9.582-4.418-9.582-9.848 0-5.43 4.298-9.848 9.582-9.848z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);
export const ExternalLink: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
    <g fill={color} fillRule="nonzero">
      <path d="M15.998 0h-5.587a1.003 1.003 0 000 2.003h3.17L8.292 7.29A.995.995 0 008 7.998c0 .268.104.52.293.708.19.19.441.294.709.294.267 0 .519-.104.708-.293l5.287-5.287v3.169a1.003 1.003 0 002.003 0V1.002C17 .449 16.55 0 15.998 0z" />
      <path d="M12.183 15.183H1.817V4.817h7.796L11.43 3H.91A.909.909 0 000 3.909V16.09c0 .502.407.909.909.909H13.09a.909.909 0 00.909-.909V5.57l-1.817 1.817v7.796z" />
    </g>
  </svg>
);

export const StackedChart: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g>
      <path
        fill={color}
        d="M9.87 11.93L6.15 10a.55.55 0 00-.53 0L0 13.44V16h16V9.16l-4.7 2.73a1.48 1.48 0 01-1.43.04z"
      />
      <path
        fill={color}
        d="M10.74 6.5a.49.49 0 01-.53.08L6.62 5a1.52 1.52 0 00-1.55.2L0 9.19v3.08l5.1-3.12a1.53 1.53 0 011.51-.05l3.72 1.9a.49.49 0 00.47 0L16 8V2z"
      />
      <path fill={color} d="M1 15V0H0v16h16v-1H1z" />
    </g>
  </svg>
);

export const TopChart: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <rect fill={color} y="8" width="4" height="8" rx=".67" />
    <rect fill={color} x="6" width="4" height="16" rx=".67" />
    <rect fill={color} x="12" y="4" width="4" height="12" rx=".67" />
  </svg>
);
export const Capita: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path
      fill={color}
      d="M13.94 9.17L12 6.42l-.1-.09-.1-.07H9.76l-.1.07a.76.76 0 00-.09.09L7.58 9.17a.64.64 0 00.15.9.68.68 0 00.38.12.62.62 0 00.52-.27l.78-1.1v1.57l-.78 3.67a.63.63 0 00.5.76h.13a.64.64 0 00.63-.52l.69-3.22H11l.68 3.22a.64.64 0 00.63.52h.14a.63.63 0 00.49-.76l-.78-3.67V8.82l.78 1.1a.65.65 0 00.9.15.64.64 0 00.1-.9z"
    />
    <circle fill={color} cx="10.73" cy="4.5" r="1.37" />
    <path fill={color} d="M2.18 16H0L5.82 0H8L2.18 16z" />
  </svg>
);

export const Dollar: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g data-name="ico Per GDP">
      <path
        fillRule="evenodd"
        fill={color}
        d="M11.74 9.85v1.43a1.21 1.21 0 00.6-.29.63.63 0 00.19-.46.51.51 0 00-.22-.42 2.61 2.61 0 00-.57-.26zm-1.52-2.1a2 2 0 00.52.24V6.71a.93.93 0 00-.53.23.55.55 0 00-.19.45.42.42 0 00.2.36zm1.35-3.36a.17.17 0 01.17.17v.84a3.57 3.57 0 012.15.94v.12a.13.13 0 010 .1l-.62.87a.14.14 0 01-.12.06.2.2 0 01-.11 0 3 3 0 00-1.32-.69v1.43a4.55 4.55 0 011.57.64 1.75 1.75 0 01.75 1.51 2 2 0 01-.57 1.49 2.7 2.7 0 01-1.75.75v.78a.17.17 0 01-.05.12.13.13 0 01-.12.05h-.66a.16.16 0 01-.12-.05.17.17 0 010-.12v-.78a3.88 3.88 0 01-2.5-1.1.18.18 0 01-.06-.13.17.17 0 010-.11l.6-.88a.15.15 0 01.19-.09.17.17 0 01.1 0 3.06 3.06 0 001.66.9V9.62A4.47 4.47 0 019.2 9a1.73 1.73 0 01-.73-1.5 1.89 1.89 0 01.6-1.4 2.74 2.74 0 011.67-.73v-.81a.17.17 0 010-.12.21.21 0 01.12-.05z"
      />
      <path fill={color} d="M2.18 16H0L5.82 0H8L2.18 16z" />
    </g>
  </svg>
);

export const PieChart: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path
      fill={color}
      d="M16 6.67A8.88 8.88 0 009.33 0a.62.62 0 00-.76.62v5.54a1.27 1.27 0 001.27 1.27h5.52a.62.62 0 00.64-.76z"
    />
    <path
      fill={color}
      d="M5.36 2.3a6.94 6.94 0 108.34 8.34.49.49 0 00-.49-.59H7.94a2 2 0 01-2-2V2.79a.49.49 0 00-.58-.49z"
    />
  </svg>
);
export const LineChart: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path fill={color} d="M1 15V0H0v16h16v-1H1z" />
    <path
      fill={color}
      d="M6 9.61l3.79 1.87a1.8 1.8 0 001.7-.07L16 8.73V7l-5.29 3.13a.29.29 0 01-.27 0L6.65 8.26a1.8 1.8 0 00-1.74.09L0 11.42v1.77l5.7-3.57a.28.28 0 01.3-.01z"
    />
    <path
      fill={color}
      d="M6.24 5.52l3.42 1.42a1.8 1.8 0 001.86-.28L16 2.92V1l-5.44 4.51a.32.32 0 01-.33 0L6.81 4.14A1.89 1.89 0 005 4.38L0 8.15V10l5.86-4.43a.39.39 0 01.38-.05z"
    />
  </svg>
);
export const PercentChart: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path fill={color} d="M1 15V0H0v16h16v-1H1z" />
    <path
      fill={color}
      d="M5.86 6.94a2.3 2.3 0 110-4.6 2.3 2.3 0 110 4.6zm5.53-4.42h1.85l-7.3 9.64H4.1zM5.86 5.57a.89.89 0 00.9-.93.9.9 0 10-1.76 0 .88.88 0 00.86.93zm5.6 6.8a2.3 2.3 0 112.34-2.3 2.29 2.29 0 01-2.34 2.3zm0-1.38a.93.93 0 10-.89-.92.89.89 0 00.89.93z"
    />
  </svg>
);

export const ProvenReserves: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path
      fill={color}
      d="M7.92 3.88c2.57 0 7.84.26 5.14 2.06-3.09 2.06 5.65 3.6 2 4.12-5.14 0-4.65 2-7.19 2S.8 11.4 3.29 10.57C7.92 9 3.48 7.89.72 7c-3.09-1.06 4.62-3.12 7.2-3.12z"
    />
  </svg>
);
export const ImportExport: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path fill={color} d="M16 4l-5.77-4v2.66H1L0 5.34h10.23V8L16 4zM0 12l5.77 4v-2.66H15l1-2.68H5.77V8L0 12z" />
  </svg>
);
export const Nuclear: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M20 17.88a3.35 3.35 0 103.35 3.35A3.36 3.36 0 0020 17.88zm0 4.69a1.35 1.35 0 111.35-1.34A1.35 1.35 0 0120 22.57zM16.27 15.86a1 1 0 00.57.51 1 1 0 00.77-.05 5.49 5.49 0 014.78 0 1 1 0 00.44.1 1.26 1.26 0 00.33-.05 1 1 0 00.57-.51l3.48-7.13a1 1 0 00-.46-1.34 15.52 15.52 0 00-13.5 0 1 1 0 00-.46 1.34zM25 8.78l-2.62 5.36a7.58 7.58 0 00-4.68 0L15 8.78a13.59 13.59 0 0110 0zM15.27 24a5.46 5.46 0 01-.72-2.35 1 1 0 00-.34-.68 1 1 0 00-.72-.25l-7.92.55a1 1 0 00-.93 1.07 15.37 15.37 0 002 6.62A15.18 15.18 0 0011.39 34a1 1 0 00.56.17 1 1 0 00.83-.44l4.44-6.58a1 1 0 00.15-.75 1 1 0 00-.42-.64A5.34 5.34 0 0115.27 24zm-3.57 7.74a13.06 13.06 0 01-3.3-3.82 13.45 13.45 0 01-1.66-4.76l5.95-.42a7.5 7.5 0 00.85 2.26A7.42 7.42 0 0015 26.8zM34.43 21.23l-7.92-.55a1 1 0 00-1.06.93 5.46 5.46 0 01-.72 2.39 5.34 5.34 0 01-1.68 1.79 1 1 0 00-.42.64 1 1 0 00.15.75l4.44 6.58a1 1 0 00.83.44 1 1 0 00.56-.17 15.18 15.18 0 004.72-5.07 15.37 15.37 0 002-6.62 1 1 0 00-.9-1.11zm-2.83 6.69a13.06 13.06 0 01-3.3 3.82L25 26.8a7.42 7.42 0 001.46-1.8 7.5 7.5 0 00.85-2.22l5.95.42a13.45 13.45 0 01-1.66 4.72z"
    />
  </svg>
);
export const Renewables: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path fill={color} d="M11.22 16.05a1 1 0 00-1 1v16.26a1 1 0 002 0V17.05a1 1 0 00-1-1z" />
    <path
      fill={color}
      d="M17 15.62a1 1 0 00-.37-1.37l-4.37-2.52v-5a1 1 0 10-2 0v5l-4.41 2.52a1 1 0 00-.36 1.37 1 1 0 001.36.38l4.37-2.52L15.59 16a1 1 0 001.41-.38zM34.58 33l-3.4-8.65a1 1 0 00-.93-.64H16.68a1 1 0 00-.93 1.29l3.39 8.65a1 1 0 00.93.63h13.58a1 1 0 00.82-.43 1 1 0 00.11-.85zm-4.1-5h-4.64l-.91-2.33h4.64zm-7.7-2.33L23.7 28h-4.64l-.91-2.33zM19.84 30h4.64l.91 2.32h-4.64zm7.7 2.32L26.63 30h4.64l.91 2.32z"
    />
  </svg>
);
export const FossilFuels: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M28.85 18.41a1 1 0 000-2h-.39v-4.83h.39a1 1 0 000-2h-2.34a.3.3 0 000-.1 1 1 0 00-1-1h-2.24a1 1 0 00-1 1v.1H11.15a1 1 0 000 2h.39v4.83h-.39a1 1 0 000 2h.39v4.83h-.39a1 1 0 000 2h.39v4.84h-.39a1 1 0 100 2h17.7a1 1 0 000-2h-.39v-4.84h.39a1 1 0 000-2h-.39v-4.83zm-15.31-6.83h12.92v4.83H13.54zm12.92 18.5H13.54v-4.84h12.92zm0-6.84H13.54v-4.83h12.92z"
    />
  </svg>
);
export const Electricity: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M28.57 17.17a1 1 0 00-.85-.47h-5.85V4.75A1 1 0 0020 4.31l-8.62 17.55a1 1 0 000 1 1 1 0 00.85.47h5.85v12a1 1 0 00.78 1h.22a1 1 0 00.9-.56l8.59-17.55a1 1 0 000-1.05zm-8.44 13.76V22.3a1 1 0 00-1-1h-5.25l6-12.23v8.63a1 1 0 001 1h5.25z"
    />
  </svg>
);
export const EnergyConsumption: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M20.62 35.87H6.07l.5-11.64 3.77 2a1 1 0 00.9 0 1 1 0 00.54-.72l.37-2 3.92 2.61a1 1 0 001.55-.78l.68-13.56h.4l.87 5.67a1 1 0 002-.3l-1-6.52a1 1 0 00-1-.85h-2.22a1 1 0 00-1 .95l-.64 12.75L12 21a1 1 0 00-.95-.09 1 1 0 00-.59.74l-.4 2.12-4-2.09a1 1 0 00-1 0 1 1 0 00-.5.83L4 36.83a1 1 0 001 1h15.62a1 1 0 000-2z"
    />
    <path
      fill={color}
      d="M28.36 17.15a7.55 7.55 0 00-7.62 7.61 7.87 7.87 0 001.85 5l.08.12a5.78 5.78 0 011.41 3.65 1.45 1.45 0 001.4 1.47h5.75a1.42 1.42 0 001.41-1.46 5.83 5.83 0 011.36-3.7l.08-.11a7.87 7.87 0 001.85-5 7.6 7.6 0 00-2.23-5.42 7.77 7.77 0 00-5.34-2.16zm4.12 11.43l-.08.12a7.88 7.88 0 00-1.74 4.3h-1.3v-5.9h.83a1 1 0 000-2h-3.9a1 1 0 000 2h1.07V33h-1.3a8 8 0 00-1.75-4.25l-.08-.13a6 6 0 01-1.49-3.81 5.64 5.64 0 019.6-4 5.6 5.6 0 011.63 4 6 6 0 01-1.49 3.77zM31.12 35.87h-5.77a1 1 0 000 2h5.77a1 1 0 000-2zM18.48 8.36a.92.92 0 00.36.07 1 1 0 00.93-.64 3.21 3.21 0 013-1.88 9.33 9.33 0 012.83.37 8.76 8.76 0 002.64.38 5 5 0 003.37-1.32A4.7 4.7 0 0135 4.13a1 1 0 000-2 6.64 6.64 0 00-4.6 1.62 3.15 3.15 0 01-2.16.91 7 7 0 01-2.12-.31 11.11 11.11 0 00-3.35-.44 5.2 5.2 0 00-4.86 3.16 1 1 0 00.57 1.29z"
    />
  </svg>
);
export const EnergyProduction: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M36.84 28.91A1 1 0 0036 28v-2a1 1 0 00-.19-2h-.93a1 1 0 00-1-1h-1.27a1 1 0 00-1 1h-6a1 1 0 00-.2 2v2a1 1 0 000 1.92v2a1 1 0 000 1.92v2a1 1 0 00.2 2h10.23a1 1 0 00.19-2v-2a1 1 0 000-1.92v-2a1 1 0 00.81-1.01zM34 26v1.94h-6.59V26zm0 3.94v1.95h-6.59v-1.98zm-6.62 5.9v-2H34v2z"
    />
    <path
      fill={color}
      d="M31.05 20.11a1 1 0 001.11.88 1 1 0 00.88-1.1L32.38 14a1 1 0 00-1-.88H20.25a1 1 0 00-1 .88l-2.7 22.69a1 1 0 00.88 1.12h.12a1 1 0 001-.88l2.6-21.79h9.35zM21.68 11.67a1 1 0 001-1c0-1.27 1.61-2.3 3.21-2.77a1 1 0 00.64-.57C27.67 4.61 29 3.87 32 4.3a1 1 0 10.27-2c-3.73-.53-5.91.57-7.39 3.81-2.11.72-4.2 2.25-4.2 4.54a1 1 0 001 1.02zM29.85 11a1 1 0 00.95.7 1 1 0 00.3 0A7.24 7.24 0 0036.41 7a1 1 0 10-1.84-.78 5.36 5.36 0 01-4.07 3.5 1 1 0 00-.65 1.28zM9 19.54a1 1 0 00-1 1v16.27a1 1 0 002 0V20.54a1 1 0 00-1-1z"
    />
    <path
      fill={color}
      d="M14.4 17.75L10 15.23v-5.05a1 1 0 00-2 0v5.05l-4.34 2.52a1 1 0 00-.36 1.37 1 1 0 001.36.36L9 17l4.37 2.52a1 1 0 001.37-.36 1 1 0 00-.34-1.41z"
    />
  </svg>
);
export const Energy: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M24.22 19.84a1 1 0 102-.16l-.58-7.36a1 1 0 00-1-.92h-3.16a1 1 0 00-1 .89l-2.74 23.5a1 1 0 00.88 1.11h.12a1 1 0 001-.89l2.63-22.61h1.34zM35.76 3.09a5.2 5.2 0 00-4.09 2.37c-.64.78-1 1.22-1.56 1.22a1.87 1.87 0 01-1.22-.43A4.52 4.52 0 0026 5.36c-2.93 0-4.38 3.09-4.44 3.22a1 1 0 00.5 1.33 1 1 0 00.41.09 1 1 0 00.91-.58s1-2.06 2.62-2.06a2.61 2.61 0 011.75.55 3.7 3.7 0 002.32.77c1.49 0 2.35-1 3.1-1.94s1.37-1.65 2.55-1.65a1 1 0 000-2z"
    />
    <path
      fill={color}
      d="M35.67 24.06a1 1 0 00-1-1h-.93a1 1 0 00-1-.95h-1.3a1 1 0 00-1 .95h-6a1 1 0 00-.2 2v2a1 1 0 000 1.92v2a1 1 0 000 1.92v2a1 1 0 00-.8 1 1 1 0 001 1h10.23a1 1 0 001-1 1 1 0 00-.8-1v-2a1 1 0 000-1.92V29a1 1 0 000-1.92V25a1 1 0 00.8-.94zm-2.8 1v2h-6.63v-2zm0 4V31h-6.63v-2zm-6.63 5.9V33h6.63v1.95zM16.27 17.57h-4.34v-9.1a1 1 0 00-.77-1A1 1 0 0010 8L3.34 21.72a1 1 0 00.05 1 1 1 0 00.85.47h4.34v9.09a1 1 0 00.77 1h.23a1 1 0 00.9-.56L17.17 19a1 1 0 00-.05-1 1 1 0 00-.85-.43zm-5.69 10.36v-5.77a1 1 0 00-1-1H5.84l4.09-8.37v5.78a1 1 0 001 1h3.74z"
    />
  </svg>
);
export const Climate: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M27.56 10.85a10.74 10.74 0 00-2.46.29L25 11l-.49-.43c-.15-.13-.31-.25-.48-.37a7.52 7.52 0 00-.75-.5l-.62-.35-.5-.23a7.14 7.14 0 00-.81-.31l-.4-.13a10.1 10.1 0 00-1.06-.24l-.37-.05a8.8 8.8 0 00-1.26-.1c-.34 0-.66 0-1 .05h-.15l-.82.13h-.08a9.74 9.74 0 00-7.34 6.73c-.07.22-.12.45-.17.67a1.33 1.33 0 000 .19 8.7 8.7 0 00-.2.94 7.55 7.55 0 00.92 15h18.14a10.58 10.58 0 000-21.15zm0 19.15H9.42a5.54 5.54 0 01-.94-11 9.17 9.17 0 00.34 1.94 1 1 0 001 .72 1 1 0 00.28 0 1 1 0 00.68-1.24 7.82 7.82 0 01-.32-2.21v-.22a8.42 8.42 0 01.19-1.52v-.15a5.44 5.44 0 01.15-.54 4 4 0 01.15-.4c0-.08.06-.17.1-.26a7.82 7.82 0 017.18-4.73 6.77 6.77 0 011 .08l.33.05c.23 0 .45.09.67.15l.36.1a8.11 8.11 0 01.82.31c.16.07.31.16.46.24s.25.13.37.21l.49.31.27.16a9 9 0 01.92.83 8.19 8.19 0 011.49 2.24 7.81 7.81 0 01.63 3.1 1 1 0 002 0 9.77 9.77 0 00-1.5-5.22 8.42 8.42 0 011-.08 8.58 8.58 0 010 17.15z"
    />
  </svg>
);
export const Footprint: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M21.4 12.89c-1.71-1.59-5.31-3.51-7.59-2.54-.81.35-1.81 1.2-1.81 3.26a16.08 16.08 0 00.66 4.89 7.69 7.69 0 01.32 3.69c-.17 1-.38 2.06-.59 3.09-.83 4.07-1.61 7.9-.13 10.09a3.69 3.69 0 002.5 1.56 5.76 5.76 0 001 .09c2.87 0 4-2.63 5.25-5.4a27 27 0 012.53-4.81c3.79-5.47 3.29-8.81-2.14-13.92zm.44 12.77a29.36 29.36 0 00-2.72 5.15c-1.48 3.35-2.16 4.49-4 4.15a1.71 1.71 0 01-1.2-.71c-1-1.49-.28-5.09.43-8.57.21-1.05.43-2.12.6-3.15a9.48 9.48 0 00-.4-4.53 14.14 14.14 0 01-.55-4.36c0-1.19.48-1.38.63-1.45 1.19-.5 3.95.77 5.45 2.17 4.92 4.64 4.78 7.02 1.76 11.3zM15.1 9.18a3 3 0 002.79-3.1A3 3 0 0015.1 3a3 3 0 00-2.79 3.1 3 3 0 002.79 3.08zm0-4.2c.43 0 .79.51.79 1.1s-.36 1.1-.79 1.1-.79-.51-.79-1.1S14.67 5 15.1 5zM18.82 10.16a1.65 1.65 0 00.72.17 2.37 2.37 0 002-1.4 2.83 2.83 0 00.32-1.5 1.65 1.65 0 00-2.57-1.33 2.85 2.85 0 00-1 1.13 2.12 2.12 0 00.53 2.93zM22.07 12.27a1.41 1.41 0 00.72.19 2.09 2.09 0 001.74-1.14 1.85 1.85 0 00-.42-2.6 1.85 1.85 0 00-2.46.94 1.86 1.86 0 00.42 2.61zM24.47 12.34a2 2 0 00-.47 1.41 1.43 1.43 0 00.51 1 1.4 1.4 0 00.91.33 1.92 1.92 0 001.44-.73 2 2 0 00.47-1.09 1.45 1.45 0 00-.5-1.3 1.67 1.67 0 00-2.36.38zM28.45 15.65a1.22 1.22 0 00-.74-.6 1.29 1.29 0 00-1 .11 1.33 1.33 0 00-.63.8 1.29 1.29 0 00.92 1.62 1.4 1.4 0 00.34.05 1.32 1.32 0 001.25-1 1.34 1.34 0 00-.14-.98z"
    />
  </svg>
);
export const Gas: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M28.16 16.85a8.58 8.58 0 00-1.95.22l-.06-.07-.41-.35-.39-.31c-.18-.12-.36-.25-.55-.36s-.4-.24-.6-.34a3.65 3.65 0 00-.41-.18 6.47 6.47 0 00-.66-.26l-.27-.09h-.16A6.32 6.32 0 0015.45 7a6.57 6.57 0 00-.84-.63l-.12-.06a5 5 0 00-.77-.38l-.23-.09a4.79 4.79 0 00-.74-.21l-.25-.06a6.64 6.64 0 00-1-.09 6 6 0 00-1 .08h-.17a5.45 5.45 0 00-.79.22l-.28.1c-.22.09-.44.19-.65.3l-.34.21-.27.29c-.17.13-.33.26-.48.4a3.7 3.7 0 00-.28.28 4.82 4.82 0 00-.36.43c-.11.14-.21.29-.31.44a2.61 2.61 0 00-.17.28 5.93 5.93 0 00-.4.72 1.46 1.46 0 00-.07.19 6.47 6.47 0 00-.24.89 4.64 4.64 0 00.91 9.19h6.49a8.08 8.08 0 00-.37 1 2.85 2.85 0 00-.11.39 2.81 2.81 0 00-.08.31 5.72 5.72 0 00-.11.57.36.36 0 010 .1 6.36 6.36 0 00.92 12.66h14.82a8.84 8.84 0 100-17.67zm-21.56.67a2.63 2.63 0 01-.9-5.11c0 .21.08.43.14.64a1 1 0 001 .72 1 1 0 00.28 0 1 1 0 00.68-1.24 3.66 3.66 0 01-.16-1.1v-.31a3.33 3.33 0 01.07-.54 3.37 3.37 0 01.1-.34c0-.12.07-.24.12-.36a3.91 3.91 0 01.31-.57v-.06a3.89 3.89 0 013.26-1.77 3.72 3.72 0 01.74.08h.15a3.89 3.89 0 01.68.23 4 4 0 01.69.4 3.67 3.67 0 01.59.53 4.12 4.12 0 01.68 1.05 3.91 3.91 0 01.32 1.55 1 1 0 002 0A5.87 5.87 0 0016.92 9s-.06-.09-.08-.14A4.3 4.3 0 0121 13.2a4.38 4.38 0 01-.31 1.6h-.15a7.38 7.38 0 00-.82 0h-.15l-.67.1h-.08a8.22 8.22 0 00-4.41 2.55zm21.56 15H13.32a4.36 4.36 0 01-.94-8.61 8.47 8.47 0 00.27 1.42 1 1 0 001 .72.92.92 0 00.28-.05 1 1 0 00.68-1.24 6.09 6.09 0 01-.29-1.76 1 1 0 010-.17 6 6 0 01.15-1.21v-.11a3.6 3.6 0 01.12-.44c0-.1.07-.2.11-.3l.09-.22a6.22 6.22 0 015.71-3.76 5.29 5.29 0 01.8.06h.27l.53.12.28.08a5.12 5.12 0 01.65.25c.13.05.25.12.37.18l.3.17c.13.08.26.16.38.25l.21.16a6.78 6.78 0 01.75.68 6 6 0 011.16 1.76 6.13 6.13 0 01.55 2.5 1 1 0 002 0 8 8 0 00-.67-3.25 8.77 8.77 0 00-.45-.86 4.91 4.91 0 01.53 0 6.84 6.84 0 110 13.67z"
    />
  </svg>
);
export const CO2: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      fill={color}
      d="M32.92 26.35a1 1 0 01-.67-1.75A7.86 7.86 0 0027 10.89a8 8 0 00-2.28.34 1 1 0 01-1-.29 7.15 7.15 0 00-12.47 4.58 1 1 0 01-1 1 5.07 5.07 0 00-4 8.23 1 1 0 01-.15 1.4A1 1 0 014.69 26a7.06 7.06 0 014.6-11.42 9.15 9.15 0 0115.45-5.4A10.11 10.11 0 0127 8.89a9.86 9.86 0 016.59 17.2 1 1 0 01-.67.26z"
    />
    <path
      fill={color}
      d="M10.54 19a1 1 0 01-1-.72 9 9 0 01-.38-2.59 9.17 9.17 0 0117.58-3.63 9 9 0 01.75 3.63 1 1 0 11-2 0 7.29 7.29 0 00-.49-2.81 7.17 7.17 0 00-13.8 2.84 7 7 0 00.3 2 1 1 0 01-.68 1.28 1 1 0 01-.28 0zM13.93 31.21c-2.21 0-4-2.12-4-4.74s1.8-4.74 4-4.74a3.58 3.58 0 012.32.87A1 1 0 0115 24.14a1.6 1.6 0 00-1-.41c-1.09 0-2 1.26-2 2.74s.92 2.74 2 2.74a1.61 1.61 0 001-.41 1 1 0 011.29 1.53 3.56 3.56 0 01-2.36.88zM20.83 31.21c-2.21 0-4-2.12-4-4.74s1.79-4.74 4-4.74 4 2.13 4 4.74-1.83 4.74-4 4.74zm0-7.48c-1.08 0-2 1.26-2 2.74s.92 2.74 2 2.74 2-1.25 2-2.74-.91-2.74-2-2.74zM29.27 32.74H27a1 1 0 01-1-1 2.78 2.78 0 011.36-2.31 5.78 5.78 0 00.7-.59.67.67 0 00.25-.53.66.66 0 00-.8 0 1 1 0 01-1.29-1.53 2.65 2.65 0 013.41 0 1.92 1.92 0 01.68 1.43 2.71 2.71 0 01-.83 2c-.19.19-.38.35-.55.49h.39a1 1 0 010 2z"
    />
  </svg>
);
export const Screenshot: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <defs>
      <clipPath id="clip-path" transform="translate(-2 -2)">
        <path fill="none" d="M0 0h44v44H0z" />
      </clipPath>
    </defs>
    <g>
      <g clipPath="url(#clip-path)">
        <path fill={color} d="M36 2h-6v4h6a2 2 0 012 2v6h4V8a6 6 0 00-6-6z" transform="translate(-2 -2)" />
        <path fill={color} d="M6 8a2 2 0 012-2h6V2H8a6 6 0 00-6 6v6h4z" transform="translate(-2 -2)" />
        <path fill={color} d="M6 36v-6H2v6a6 6 0 006 6h6v-4H8a2 2 0 01-2-2z" transform="translate(-2 -2)" />
        <path fill={color} d="M38 36a2 2 0 01-2 2h-6v4h6a6 6 0 006-6v-6h-4z" transform="translate(-2 -2)" />
      </g>
    </g>
  </svg>
);
export const Coal: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40">
    <g fill={color} fillRule="nonzero">
      <path d="M30.44 12.344l-4.288-9.007a1.002 1.002 0 00-.63-.53l-8.6-2.475a1.036 1.036 0 00-.971.218L9.066 6.634a.986.986 0 00-.33.86l.987 8.04c.05.411.357.747.768.843l7.68 1.79a1.038 1.038 0 00.62-.047l11.106-4.434c.258-.103.463-.305.565-.559a.972.972 0 00-.023-.783zM22.11 5.45L20.973 6.57a1 1 0 01-1.653-.4l-.523-1.6a1 1 0 011.227-1.272l1.66.477a1 1 0 01.426 1.673zm-5.635 10.278l-4.138-.965a1 1 0 01-.765-.852l-.692-5.63a1 1 0 01.33-.87l3.81-3.367a1 1 0 011.612.439l1.696 5.189-.634 5.203a1 1 0 01-1.22.853zm3.375-1.765l.438-3.595a1 1 0 01.29-.59l3.348-3.307a1 1 0 011.606.282l2.156 4.53a1 1 0 01-.533 1.358l-5.942 2.372a1 1 0 01-1.363-1.05zM15.035 38.879l4.92-8.678c.14-.248.167-.546.073-.82l-2.907-8.465a1.036 1.036 0 00-.735-.67l-8.933-2.15a.986.986 0 00-.893.223l-6.02 5.42a.994.994 0 00-.25 1.112l2.938 7.318a1.038 1.038 0 00.394.481l10.003 6.555c.232.152.515.204.782.142a.972.972 0 00.628-.468zm.871-10.778l-1.571-.288a1 1 0 01-.62-1.584l1.01-1.346a1 1 0 011.746.276l.56 1.633a1 1 0 01-1.125 1.309zM4.254 29.38l-1.583-3.943a1 1 0 01.26-1.116l4.214-3.796a1 1 0 01.904-.229l4.941 1.19a1 1 0 01.566 1.572l-3.278 4.366-4.625 2.465a1 1 0 01-1.399-.51zm3.382 1.752l3.196-1.703a1 1 0 01.65-.102l4.63.847a1 1 0 01.69 1.476l-2.474 4.364a1 1 0 01-1.418.343l-5.352-3.506a1 1 0 01.078-1.72zM19.554 20.93l3.648 9.284c.104.265.32.473.592.573l8.407 3.068c.332.121.705.065.984-.15l7.292-5.589c.26-.2.406-.51.39-.834l-.425-8.09a.994.994 0 00-.707-.894l-7.536-2.321a1.038 1.038 0 00-.622.003L20.19 19.628a1.012 1.012 0 00-.603.519.972.972 0 00-.032.783zm7.829 7.46l1.212-1.04a1 1 0 011.62.514l.41 1.632a1 1 0 01-1.312 1.184l-1.622-.592a1 1 0 01-.308-1.699zm6.338-9.861l4.06 1.251a1 1 0 01.704.903l.297 5.665a1 1 0 01-.39.846l-4.034 3.092a1 1 0 01-1.578-.55l-1.33-5.295.995-5.146a1 1 0 011.276-.766zm-3.49 1.525l-.688 3.556a1 1 0 01-.33.569l-3.571 3.065a1 1 0 01-1.583-.393l-1.834-4.67a1 1 0 01.626-1.317l6.093-1.952a1 1 0 011.287 1.142z" />
    </g>
  </svg>
);
export const Fire: React.SFC<IIcons> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      fill={color}
      d="M369.215 159.814c-91.389-55.601-48.533-134.078-46.694-137.34A14.998 14.998 0 00309.516 0c-47.043 0-83.881 13.366-109.49 39.728-43.759 45.045-41.729 115.152-40.863 145.09.096 3.316.179 6.182.179 8.31 0 22.228 3.566 42.749 6.713 60.854 2.028 11.667 3.779 21.743 4.09 29.665.333 8.48-1.215 10.424-1.281 10.502-.221.262-2.061 1.241-7.036 1.241-5.674 0-9.857-1.854-13.563-6.009-14.476-16.232-15.477-60.554-12.709-84.667a15 15 0 00-14.899-16.732c-38.945 0-68.046 63.688-68.046 120.632 0 26.769 5.384 52.992 16.003 77.94 10.266 24.118 24.905 45.886 43.512 64.696C150.878 490.425 201.971 512 255.995 512c54.241 0 105.321-21.27 143.831-59.89 38.41-38.52 59.563-89.483 59.563-143.498-.001-68.922-53.927-126.747-90.174-148.798zM255.995 482c-93.983 0-173.383-79.401-173.383-173.388 0-22.857 5.454-46.85 14.963-65.825 2.221-4.433 4.5-8.236 6.749-11.44.251 24.747 4.171 58.482 21.526 77.972 9.362 10.513 21.803 16.07 35.979 16.07 13.243 0 23.335-4.014 29.993-11.93 12.448-14.798 8.627-36.782 3.791-64.615-2.939-16.91-6.27-36.077-6.27-55.717 0-2.563-.089-5.628-.191-9.179-.821-28.358-2.53-87.367 32.393-123.316C237.222 44.493 259.11 34.671 286.8 31.31c-3.126 10.38-5.821 23.557-5.925 38.311-.23 32.508 12.204 78.989 72.748 115.823 29.293 17.821 75.766 67.018 75.766 123.169C429.388 404.219 351.604 482 255.995 482z"
    />
  </svg>
);

export type IconName =
  | "Oval1"
  | "Oval2"
  | "Oval3"
  | "Oval4"
  | "Share"
  | "Iframe"
  | "Table"
  | "Gear"
  | "MagnifyingGlass"
  | "ExternalLink"
  | "StackedChart"
  | "TopChart"
  | "Capita"
  | "Dollar"
  | "PieChart"
  | "LineChart"
  | "PercentChart"
  | "ProvenReserves"
  | "ImportExport"
  | "Nuclear"
  | "Renewables"
  | "FossilFuels"
  | "Electricity"
  | "EnergyConsumption"
  | "EnergyProduction"
  | "Energy"
  | "Climate"
  | "Footprint"
  | "Gas"
  | "CO2"
  | "Screenshot"
  | "Coal"
  | "Fire";
export default {
  Oval1,
  Oval2,
  Oval3,
  Oval4,
  Share,
  Iframe,
  Table,
  Gear,
  MagnifyingGlass,
  ExternalLink,
  StackedChart,
  TopChart,
  Capita,
  Dollar,
  PieChart,
  LineChart,
  PercentChart,
  ProvenReserves,
  ImportExport,
  Nuclear,
  Renewables,
  FossilFuels,
  Electricity,
  EnergyConsumption,
  EnergyProduction,
  Energy,
  Climate,
  Footprint,
  Gas,
  CO2,
  Screenshot,
  Coal,
  Fire
};