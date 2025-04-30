import { notFound, redirect } from 'next/navigation';

export default function Home() {
  const useRedirect = true;
  if (useRedirect) {
    redirect('/campaign/happy-people');
  } else {
    notFound();
  }

  return (
    <div className="">
      <div></div>
    </div>
  );
}
