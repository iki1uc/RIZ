// RIZ.js – Gegen-Engine (RAW)

export function RIZ(value){
    return {
        type: "RIZ",
        input: value,
        output: -value,     // Gegenbewegung
        mode: "reverse",
        valid: true
    };
}
