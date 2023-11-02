/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                type: 'asset/source',
            },
            {
                test: /\.kt$/,
                type: 'asset/source'
            }
        )
        return config
    },
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true
}

module.exports = nextConfig
