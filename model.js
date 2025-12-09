// ===============================
// MODEL 1: LINEAR REGRESSION
// ===============================
function linearModel(suhu, ph, doValue) {
    const w = [-1.2, 5.5, 4.0]; // Suhu, pH, DO
    const bias = 40;

    let score = bias +
        suhu * w[0] +
        ph * w[1] +
        doValue * w[2];

    return Math.max(0, Math.min(100, score));
}

// ===============================
// MODEL 2: POLYNOMIAL REGRESSION (Degree 2)
// ===============================
function polynomialModel(suhu, ph, doValue) {
    // Bobot simulasi polynomial (bisa diganti ketika punya dataset)
    const b0 = 30;
    const b1 = -0.8,  b2 = 4.5,  b3 = 3.8;       // Linear
    const c1 = -0.03, c2 = 0.25, c3 = 0.18;     // Kuadrat

    let score =
        b0 +
        b1 * suhu +
        b2 * ph +
        b3 * doValue +
        c1 * (suhu * suhu) +
        c2 * (ph * ph) +
        c3 * (doValue * doValue);

    return Math.max(0, Math.min(100, score));
}

// ===============================
// FUNGI PEMILIH MODEL
// ===============================
function modelPredict(type, suhu, ph, doValue) {
    if (type === "poly") {
        return polynomialModel(suhu, ph, doValue);
    }
    return linearModel(suhu, ph, doValue);
}
