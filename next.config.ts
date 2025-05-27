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



// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
