import getGoogleUrl from "../lib/getGoogleUrl";

export default async function Home() {
  return (
    <main>
      <a href={getGoogleUrl()}>
        click hereee
      </a>
    </main>
  );
}
