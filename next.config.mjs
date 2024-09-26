/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/blog/sitemap.xml',
            destination: 'https://obportal.s3.ap-southeast-1.amazonaws.com/obc_blog/sitemap/blog_detail_sitemap.xml',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
