import { RIZ } from "./RIZ.js";

export function TETRIZ(x,y,z){

    const lego = { fix: x, type: "LEGO", lock: true };

    const forward = { type: "TET", move: y };
    const backward = RIZ(z);

    return {
        x,
        y,
        z,
        lego,
        forward,
        backward,
        formula: "(x(TET(y(RIZ(z(LEGO(x))x)RIZ)y)z))"
    };
}
