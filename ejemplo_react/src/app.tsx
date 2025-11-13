import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <main style={{ fontFamily: "system-ui, sans-serif", padding: 16 }}>
            <h1>React + TypeScript en WSL</h1>
            <p>Hola, mundo </p>
            <button onClick={() => setCount((c) => c + 1)}>Click {count}</button>
        </main>
    );
}