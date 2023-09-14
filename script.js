document.addEventListener("DOMContentLoaded", function() {
    const sideLengthInput = document.getElementById("sideLength");
    const calculateButton = document.getElementById("calculateButton");
    const resetButton = document.getElementById("resetButton");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const sideLength = parseFloat(sideLengthInput.value);

        if (!isNaN(sideLength)) {
            const area = sideLength * sideLength;
            const perimeter = 4 * sideLength;
            resultElement.innerHTML = `
                <p>Luas Persegi: ${area}</p>
                <p>Keliling Persegi: ${perimeter}</p>
            `;
        } else {
            resultElement.innerHTML = "Masukkan panjang sisi yang valid.";
        }
    });
    resetButton.addEventListener("click", function() {
        // Mengosongkan input dan hasil
        sideLengthInput.value = "";
        resultElement.innerHTML = "";
    });
});
