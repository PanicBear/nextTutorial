const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,

  // source를 필터링해서 원하는 url로 리디렉션
  // 사용자가 url의 변경을 인지함
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
  // 사용자가 url의 변경을 인지하지 못함
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
