/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = config.resolve.fallback || {};
            config.resolve.fallback.fs = false;
            config.resolve.fallback.child_process = false;
            config.resolve.fallback.net = false;
            config.resolve.fallback.tls = false;
        }

        // 忽略.node文件
        config.externals = config.externals || [];
        config.externals.push(/\.node$/);

        return config;
    },
};

module.exports = nextConfig
