// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
// };

// module.exports = nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

//   ignoreBuildErrors: true,

// eslint: {
//     ignoreDuringBuilds: true
//   },

output: 'export',
images: {
  unoptimized: true,
},
};

export default nextConfig;


// module.exports = {
//   exportPathMap: async function () {
//     return {
//       '/': { page: '/' },
//       '/Business': { page: '/Business' },
//       // '/dynamic-route': { page: '/dynamic-route' }
//     };
//   }
// };




// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
