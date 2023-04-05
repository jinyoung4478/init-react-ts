import {Link} from 'react-router-dom';

export default function Main() {
  return (
    <>
      <h1 className="text-3xl font-bold underline my-head">
        Vite + React + TS + Tailwind CSS
      </h1>
      <Link to="/sign-in" className="border bg-red-200 py-2 px-4">
        로그인
      </Link>
    </>
  );
}
