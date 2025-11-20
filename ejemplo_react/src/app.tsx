import { useState } from "react";

export default function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const sumar = () => {
        setResult(num1 + num2);
    }
    return (
        <div>
            <h1>Calculadora</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={sumar}>Sumar</button>
            <h2>Resultado: {result}</h2>
        </div>
    )
}