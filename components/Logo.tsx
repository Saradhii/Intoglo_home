import NextImage from 'next/image';

export default function Logo({ ...rest }) {
  return (
    // <svg id="logo-34" width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    //   <path d="M51.5821 10.2839H48V26.4472H57.9164V23.2801H51.5821V10.2839Z" className="ccustom" fill="currentColor"></path>
    //   <path
    //     d="M58.2585 20.9648C58.2585 24.4159 60.5738 26.7093 64.0685 26.7093C67.5414 26.7093 69.8567 24.4159 69.8567 20.9648C69.8567 17.5137 67.5414 15.1984 64.0685 15.1984C60.5738 15.1984 58.2585 17.5137 58.2585 20.9648ZM61.644 20.9429C61.644 19.3048 62.6051 18.2127 64.0685 18.2127C65.5101 18.2127 66.4712 19.3048 66.4712 20.9429C66.4712 22.603 65.5101 23.6951 64.0685 23.6951C62.6051 23.6951 61.644 22.603 61.644 20.9429Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M70.3978 20.7901C70.3978 24.0882 72.5384 26.3161 75.5744 26.3161C77.0379 26.3161 78.3047 25.7919 78.9381 24.9401V26.4472C78.9381 27.9543 77.9989 28.959 76.3389 28.959C74.8536 28.959 73.827 28.2601 73.7615 27.0151H70.3541C70.6599 30.0075 72.9752 32.0169 76.1423 32.0169C79.8773 32.0169 82.2363 29.5925 82.2363 25.7482V15.5261H79.2002L79.0255 16.64C78.4139 15.7445 77.1252 15.1548 75.64 15.1548C72.582 15.1548 70.3978 17.4482 70.3978 20.7901ZM73.8052 20.7027C73.8052 19.13 74.8536 18.0816 76.186 18.0816C77.7368 18.0816 78.8726 19.1082 78.8726 20.7027C78.8726 22.2972 77.7586 23.3893 76.2078 23.3893C74.8755 23.3893 73.8052 22.2972 73.8052 20.7027Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M83.2166 20.9648C83.2166 24.4159 85.5319 26.7093 89.0267 26.7093C92.4996 26.7093 94.8148 24.4159 94.8148 20.9648C94.8148 17.5137 92.4996 15.1984 89.0267 15.1984C85.5319 15.1984 83.2166 17.5137 83.2166 20.9648ZM86.6022 20.9429C86.6022 19.3048 87.5632 18.2127 89.0267 18.2127C90.4682 18.2127 91.4293 19.3048 91.4293 20.9429C91.4293 22.603 90.4682 23.6951 89.0267 23.6951C87.5632 23.6951 86.6022 22.603 86.6022 20.9429Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M97.7149 13.8224C98.7633 13.8224 99.6152 12.9705 99.6152 11.9003C99.6152 10.83 98.7633 10 97.7149 10C96.6446 10 95.7928 10.83 95.7928 11.9003C95.7928 12.9705 96.6446 13.8224 97.7149 13.8224ZM96.0112 26.4472H99.3968V15.5261H96.0112V26.4472Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M101.368 31.6893H104.688V25.3551C105.321 26.1851 106.763 26.753 108.27 26.753C111.524 26.753 113.49 24.263 113.403 20.8119C113.315 17.2953 111.284 15.1766 108.248 15.1766C106.697 15.1766 105.234 15.8537 104.622 16.8585L104.447 15.5261H101.368V31.6893ZM104.753 20.9866C104.753 19.3485 105.845 18.2564 107.418 18.2564C109.012 18.2564 110.017 19.3703 110.017 20.9866C110.017 22.603 109.012 23.7169 107.418 23.7169C105.845 23.7169 104.753 22.6248 104.753 20.9866Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M113.761 22.9961C113.848 25.2022 115.596 26.7311 118.348 26.7311C120.991 26.7311 122.826 25.3332 122.826 23.0835C122.826 21.4672 121.865 20.3969 120.073 19.96L118.13 19.4795C117.431 19.3048 116.994 19.13 116.994 18.5621C116.994 17.9942 117.452 17.6229 118.13 17.6229C118.894 17.6229 119.396 18.1253 119.375 18.8679H122.411C122.323 16.5963 120.598 15.1766 118.195 15.1766C115.771 15.1766 113.958 16.6182 113.958 18.8024C113.958 20.2658 114.766 21.4672 116.928 22.0351L118.85 22.5374C119.418 22.6903 119.658 22.9524 119.658 23.3237C119.658 23.8698 119.156 24.2193 118.304 24.2193C117.321 24.2193 116.797 23.7606 116.797 22.9961H113.761Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M127.974 26.7311C129.307 26.7311 130.639 26.1195 131.316 25.224L131.535 26.4472H134.702V15.5261H131.338V21.2051C131.338 22.8432 130.858 23.7387 129.307 23.7387C128.105 23.7387 127.319 23.1927 127.319 21.1614V15.5261H123.955V22.3845C123.955 24.9838 125.397 26.7311 127.974 26.7311Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M140.036 26.4472V20.4843C140.036 18.6495 141.019 18.1253 141.98 18.1253C143.05 18.1253 143.749 18.7806 143.749 20.1348V26.4472H147.069V20.4843C147.069 18.6277 148.03 18.1035 148.991 18.1035C150.061 18.1035 150.782 18.7587 150.782 20.1348V26.4472H154.059V19.3048C154.059 16.8148 152.748 15.1548 149.93 15.1548C148.358 15.1548 147.069 15.9192 146.501 17.0987C145.846 15.9192 144.71 15.1548 142.897 15.1548C141.696 15.1548 140.582 15.7008 139.927 16.5745L139.796 15.5261H136.65V26.4472H140.036Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M0 20C0 10.5719 0 5.85786 2.92893 2.92893C5.85786 0 10.5719 0 20 0C29.4281 0 34.1421 0 37.0711 2.92893C40 5.85786 40 10.5719 40 20C40 29.4281 40 34.1421 37.0711 37.0711C34.1421 40 29.4281 40 20 40C10.5719 40 5.85786 40 2.92893 37.0711C0 34.1421 0 29.4281 0 20Z"
    //     className="ccustom"
    //     fill="currentColor"
    //   ></path>{' '}
    //   <path
    //     d="M24 26C24.5523 26 25.0101 26.4521 24.9004 26.9934C24.7065 27.9494 24.2355 28.8355 23.5355 29.5355C22.5979 30.4732 21.3261 31 20 31C18.6739 31 17.4022 30.4732 16.4645 29.5355C15.7645 28.8355 15.2935 27.9494 15.0997 26.9934C14.9899 26.4521 15.4477 26 16 26L24 26Z"
    //     className="ccompli2"
    //     fill="#2DF8BB"
    //   ></path>{' '}
    //   <path
    //     d="M26.1023 17.7765C25.5688 17.9194 25.2421 18.4775 25.5126 18.959C25.7973 19.4658 26.1911 19.9081 26.6702 20.2514C27.4224 20.7904 28.3382 21.052 29.2617 20.9914C30.1851 20.9309 31.059 20.5521 31.7344 19.9195C32.4099 19.2869 32.845 18.4396 32.9658 17.5221C33.0866 16.6046 32.8856 15.6736 32.3969 14.8877C31.9082 14.1019 31.1621 13.5098 30.2858 13.2123C29.4095 12.9148 28.4572 12.9304 27.5911 13.2564C27.0395 13.464 26.5447 13.7893 26.1385 14.2051C25.7526 14.6002 25.9237 15.2239 26.402 15.5L26.9093 15.7929C27.6808 16.2384 27.5287 17.3943 26.6681 17.6249L26.1023 17.7765Z"
    //     className="ccompli2"
    //     fill="#2DF8BB"
    //   ></path>{' '}
    //   <path
    //     d="M13.8978 17.7765C14.4313 17.9194 14.758 18.4775 14.4875 18.959C14.2028 19.4658 13.809 19.9081 13.33 20.2514C12.5778 20.7904 11.6619 21.052 10.7385 20.9914C9.81502 20.9309 8.94113 20.5521 8.2657 19.9195C7.59027 19.2869 7.15508 18.4396 7.03429 17.5221C6.9135 16.6046 7.11457 15.6736 7.60326 14.8877C8.09194 14.1019 8.838 13.5098 9.71431 13.2123C10.5906 12.9148 11.543 12.9304 12.4091 13.2564C12.9606 13.464 13.4555 13.7893 13.8617 14.2051C14.2476 14.6002 14.0764 15.2239 13.5981 15.5L13.0908 15.7929C12.3193 16.2384 12.4715 17.3943 13.332 17.6249L13.8978 17.7765Z"
    //     className="ccompli2"
    //     fill="#2DF8BB"
    //   ></path>
    // </svg>
    //     <svg
    //       version="1.0"
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="150.000000pt"
    //       height="37.000000pt"
    //       viewBox="0 0 150.000000 37.000000"
    //       preserveAspectRatio="xMidYMid meet"
    //     >
    //       <g transform="translate(0.000000,37.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
    //         <path
    //           d="M61 293 c17 -32 36 -62 41 -67 15 -17 9 -38 -32 -108 -22 -39 -40
    // -71 -40 -72 0 -1 39 -2 86 -1 l86 0 44 77 43 76 -42 76 -42 76 -88 0 -88 0 32
    // -57z"
    //         />
    //         <path
    //           d="M390 305 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0
    // -15 -7 -15 -15z"
    //         />
    //         <path
    //           d="M667 313 c-11 -10 -8 -192 3 -213 18 -33 90 -36 90 -4 0 9 -11 14
    // -29 14 -34 0 -41 14 -41 76 0 42 1 44 30 44 23 0 30 4 30 20 0 16 -7 20 -30
    // 20 -25 0 -30 4 -30 25 0 24 -10 32 -23 18z"
    //         />
    //         <path
    //           d="M1210 194 c0 -96 3 -125 13 -122 8 3 13 40 15 126 2 104 0 122 -13
    // 122 -13 0 -15 -20 -15 -126z"
    //         />
    //         <path
    //           d="M843 258 c-55 -14 -82 -97 -48 -145 20 -28 75 -46 106 -34 64 24 86
    // 106 40 154 -27 30 -54 36 -98 25z m69 -45 c37 -33 11 -103 -38 -103 -31 0 -54
    // 26 -54 60 0 53 53 78 92 43z"
    //         />
    //         <path
    //           d="M1063 262 c-30 -5 -63 -48 -63 -84 0 -39 40 -78 80 -78 45 0 67 15
    // 80 55 21 63 -29 118 -97 107z m55 -44 c19 -19 15 -66 -7 -78 -31 -16 -49 -12
    // -67 15 -15 23 -15 27 0 50 18 27 54 33 74 13z"
    //         />
    //         <path
    //           d="M1343 255 c-38 -16 -53 -42 -53 -89 0 -53 35 -89 88 -89 48 0 70 15
    // 89 61 19 46 -3 97 -51 117 -41 18 -33 18 -73 0z m77 -45 c24 -24 25 -48 4 -78
    // -31 -44 -104 -16 -104 40 0 24 35 58 60 58 11 0 29 -9 40 -20z"
    //         />
    //         <path
    //           d="M397 253 c-4 -3 -7 -46 -7 -95 0 -72 3 -88 15 -88 12 0 15 17 15 95
    // 0 87 -5 107 -23 88z"
    //         />
    //         <path
    //           d="M474 245 c-3 -6 -4 -47 -2 -91 2 -62 6 -79 18 -79 11 0 16 15 18 65
    // 4 72 18 96 51 85 18 -6 21 -14 21 -69 0 -41 5 -68 13 -75 22 -17 27 -3 27 71
    // 0 88 -17 108 -91 106 -29 0 -53 -6 -55 -13z"
    //         />
    //         <path
    //           d="M1127 78 l-35 -43 -30 16 c-42 24 -62 8 -26 -20 50 -40 115 -11 128
    // 57 3 17 4 32 2 32 -2 0 -19 -19 -39 -42z"
    //         />
    //       </g>
    //     </svg>
    // <img src="https://storage.cloudconvert.com/tasks/3a583b94-5352-4552-8277-95776b20bce7/intoglo_logo.jpg?AWSAccessKeyId=cloudconvert-production&Expires=1668245620&Signature=4S7%2FdMOA1a8znETnBGFudPjqg0Q%3D&response-content-disposition=inline%3B%20filename%3D%22intoglo_logo.jpg%22&response-content-type=image%2Fjpeg" alt="" />
    // <img src="https://ik.imagekit.io/qtf62wap9/es/static/u/intoglo.com/images/logo/original/intoglo_logo.png?tr=w-150" alt="" />
    <div style={{borderRadius: '5px', overflow: 'hidden', textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <NextImage src="/1075x790.gif" height="55%" width="150px" alt="Intoglo" />
    </div>
  );
}
