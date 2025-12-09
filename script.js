let chart;

function predictQuality() {

    const suhu = parseFloat(document.getElementById("suhu").value);
    const ph = parseFloat(document.getElementById("ph").value);
    const doValue = parseFloat(document.getElementById("do").value);

    const modelType = document.getElementById("modelType").value;

    // PILIH MODEL
    const score = modelPredict(modelType, suhu, ph, doValue);

    // KATEGORI
    let category = "";
    if (score >= 80) category = "Sangat Baik";
    else if (score >= 70) category = "Baik";
    else if (score >= 60) category = "Sedang";
    else if (score >= 50) category = "Buruk";
    else category = "Sangat Buruk";

    document.getElementById("scoreText").innerText = "Skor: " + score.toFixed(2);
    document.getElementById("categoryText").innerText = "Kategori: " + category;

    updateChart(score);
}

function updateChart(score) {
    const ctx = document.getElementById("qualityChart").getContext("2d");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Kualitas Air"],
            datasets: [{
                label: "Skor",
                data: [score],
                backgroundColor: getColor(score)
            }]
        }
    });
}

function getColor(score) {
    if (score >= 80) return "green";
    if (score >= 70) return "lightgreen";
    if (score >= 60) return "yellow";
    if (score >= 50) return "orange";
    return "red";
}
