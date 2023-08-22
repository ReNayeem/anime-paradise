export default function Anime({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="container">
        <h1>Dynamic Route coming from {params.id}</h1>
      </div>
    </>
  );
}
