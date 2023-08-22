export default function Anime({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Dynamic Route coming from {params.id}</h1>
    </>
  );
}
