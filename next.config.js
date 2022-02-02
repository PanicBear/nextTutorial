const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,

  // source를 필터링해서 원하는 url로 리디렉션
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-sexy-blog/:path*',
        permanent: false,
      },
      {
        source: '/contact',
        destination: 'https://nomadcoders.co',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
