import Link from 'next/link';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => {
            onClick(movie.id, movie.original_title);
          }}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie {
            cursor:pointer;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {ß
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

// 백엔드 상에서만 동작하는 코드
// 클라이언트에게 보이지 않음
// export (async) getServerSideProps의 이름을 유지해야 함
// props key가 있는 객체를 반환해야하며, props 안에 필요한 데이터 넣기
// 해당 함수를 활성화하는 경우, 데이터가 HTML 상에 포합되며 모든 작업이 CSR => SSR로 전환
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
