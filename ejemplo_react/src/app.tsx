// import { useState } from "react";

// export default function App() {
//     const [num1, setNum1] = useState(0);
//     const [num2, setNum2] = useState(0);
//     const [result, setResult] = useState(0);

//     const sumar = () => {
//         setResult(num1 + num2);
//     }
//     return (
//         <div>
//             <h1>Calculadora</h1>
//             <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
//             <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
//             <button onClick={sumar}>Sumar</button>
//             <h2>Resultado: {result}</h2>
//         </div>
//     )
// }


import { useState } from "react";

export default function Hotel() {

    const [huespedes, setHuespedes] = useState(1);
    const [dias, setDias] = useState(1);

    // Tarifas
    const tarifaIndividual = 2500;
    const tarifaDoble = 4600;
    const tarifaFamiliar = 5200;

    // Función para hacer los calculos
    function calcular() {
        let tarifa = 0;
        let descuento = 0;

        //tarifa según el número de huéspedes
        if (huespedes === 1) {
            tarifa = tarifaIndividual;
            descuento = 0.05; // 5%
        } else if (huespedes === 2) {
            tarifa = tarifaDoble;
            descuento = 0.09; // 9%
        } else {
            tarifa = tarifaFamiliar;
            descuento = 0.15; // 15%
        }

        // Subtotal sin IVA
        const subtotal = tarifa * dias;

        // IVA del 19%
        const iva = subtotal * 0.19;

        // Total con IVA
        const totalConIva = subtotal + iva;

        // Descuento aplicado SOBRE el total con IVA (como dice el enunciado)
        const montoDescuento = totalConIva * descuento;

        // Total final
        const totalFinal = totalConIva - montoDescuento;

        // Devolvemos todos los resultados juntos
        return {
            tarifa,
            subtotal,
            iva,
            totalConIva,
            montoDescuento,
            totalFinal,
        };
    }

    const resultado = calcular();

    return (
        <div style={{ padding: "20px" }}>
            <h1>Calculadora de Hotel - Caso 3</h1>

            <label>
                Número de huéspedes:
                <input
                    type="number"
                    value={huespedes}
                    min="1"
                    onChange={(e) => setHuespedes(Number(e.target.value))}
                />
            </label>
            <br /><br />

            <label>
                Días de estadía:
                <input
                    type="number"
                    value={dias}
                    min="1"
                    onChange={(e) => setDias(Number(e.target.value))}
                />
            </label>
            <br /><br />

            <h2>Resultados:</h2>
            <p>Tarifa aplicada: ${resultado.tarifa}</p>
            <p>Subtotal (sin IVA): ${resultado.subtotal}</p>
            <p>IVA (19%): ${resultado.iva}</p>
            <p>Total con IVA: ${resultado.totalConIva}</p>
            <p>Descuento aplicado: ${resultado.montoDescuento}</p>
            <h3>Total final a pagar: ${resultado.totalFinal}</h3>
        </div>
    );
}