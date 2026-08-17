export const SHELL = {

  // Reale 3E der SHELL-Ebene
  real3E: [
    "SHELL-IN",     // Aktiv an jeder Station, Orbit, KOORIDOR
    "SHELL-CORE",   // Multiplikation x4 / x16 / x128 + 3×3×3×3
    "SHELL-OUT"     // kontrollierter Ausweg, nicht pressbar
  ],

  // Vollständige Fähigkeitsschaltung
  ability: {
    station: "aktiv",
    orbit: "aktiv",
    kooridor: "aktiv",
    x4: "bereit",
    x16: "bereit",
    x128: "bereit",
    octa2: "geschlossen",
    matrix_3x3x3x3: "bereit"
  },

  // Reale Ebene
  layer: "octa²",

  // Typ
  type: "SHELL-real",

  // Anzahl der realen Energien
  total: 3
};

