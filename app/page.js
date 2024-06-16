import Board from "./components/Board";

export default function Home() {
  return (
    <main style={{ width: "100%", height: "100vh", backgroundColor: "#00d4ff" }}>
      <div style={{ width: "1920px", margin: "0 auto", }}>
        <h1 style={{ textAlign: "center", marginBottom: "150px", color: "white", fontSize: "64px" }}>
          2048 game
        </h1>
        <Board />
      </div>
    </main>
  );
}
