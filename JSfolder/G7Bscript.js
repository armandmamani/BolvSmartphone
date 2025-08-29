// JavaScript source code
const apartmentDetails = [
    { id: "C02", floor: "0", typology: "1+1", scale: "C", totalNetArea: 69.75, commonArea: 29.59, totalArea: 99.34, verandaArea: 18.57, plotArea: 0, storeArea: 17.03, statusi: "Shitur", shenime: "Lori" },
    { id: "C03", floor: "0", typology: "1+1", scale: "C", totalNetArea: 70.29, commonArea: 29.82, totalArea: 100.11, verandaArea: 30.98, plotArea: 0, storeArea: 17.03, statusi: "Shitur", shenime: "Renato" },
    { id: "C04", floor: "0", typology: "1+1", scale: "C", totalNetArea: 66.19, commonArea: 28.08, totalArea: 94.27, verandaArea: 76.61, plotArea: 0, storeArea: 17.86, statusi: "Rezervuar", shenime: "Hektori" },
    { id: "C06", floor: "0", typology: "2+1", scale: "C", totalNetArea: 112.25, commonArea: 47.62, totalArea: 159.87, verandaArea: 16.03, plotArea: 0, storeArea: 17.03, statusi: "Shitur", shenime: "Akili" },
    { id: "A11", floor: "1", typology: "Studio", scale: "A", totalNetArea: 58.9, commonArea: 24.99, totalArea: 83.89, verandaArea: 71.33, plotArea: 0, storeArea: 0, statusi: "Rezervuar", shenime: "Hektori" },
    { id: "A12", floor: "1", typology: "2+1", scale: "A", totalNetArea: 118.46, commonArea: 50.25, totalArea: 168.71, verandaArea: 175.56, plotArea: 0, storeArea: 16.44, statusi: "Rezervuar", shenime: "Arber" },
    { id: "A13", floor: "1", typology: "2+1", scale: "A", totalNetArea: 104.43, commonArea: 44.3, totalArea: 148.73, verandaArea: 165.08, plotArea: 0, storeArea: 25.61, statusi: "Rezervuar", shenime: "Arber" },
    { id: "A24", floor: "2", typology: "1+1", scale: "A", totalNetArea: 67.79, commonArea: 28.76, totalArea: 96.55, verandaArea: 4.35, plotArea: 0, storeArea: 14.85, statusi: "Per shitje", shenime: "0" },
    { id: "A23", floor: "2", typology: "1+1", scale: "A", totalNetArea: 65.92, commonArea: 27.96, totalArea: 93.88, verandaArea: 38.21, plotArea: 0, storeArea: 13.62, statusi: "Shitur", shenime: "Iliri" },
    { id: "A31", floor: "3", typology: "Studio", scale: "A", totalNetArea: 53.51, commonArea: 22.7, totalArea: 76.21, verandaArea: 0, plotArea: 0, storeArea: 12.69, statusi: "Shitur", shenime: "Shefi" },
    { id: "A34", floor: "3", typology: "1+1", scale: "A", totalNetArea: 71.77, commonArea: 30.45, totalArea: 102.22, verandaArea: 21.64, plotArea: 0, storeArea: 12.58, statusi: "Shitur", shenime: "Mark Pjetergjoka" },
    { id: "A35", floor: "3", typology: "2+1", scale: "A", totalNetArea: 90.94, commonArea: 38.58, totalArea: 129.52, verandaArea: 36.79, plotArea: 0, storeArea: 11.05, statusi: "Per shitje", shenime: "0" },
    { id: "A41", floor: "4", typology: "1+1", scale: "A", totalNetArea: 71.57, commonArea: 30.36, totalArea: 101.93, verandaArea: 0, plotArea: 0, storeArea: 11.05, statusi: "Shitur", shenime: "Shefi" },
    { id: "A42", floor: "4", typology: "1+1", scale: "A", totalNetArea: 68.23, commonArea: 28.94, totalArea: 97.17, verandaArea: 6.99, plotArea: 0, storeArea: 14.85, statusi: "Shitur", shenime: "Lori" },
    { id: "A43", floor: "4", typology: "2+1", scale: "A", totalNetArea: 90.75, commonArea: 38.5, totalArea: 129.25, verandaArea: 0, plotArea: 0, storeArea: 15.75, statusi: "Shitur", shenime: "Lori" },
    { id: "A51", floor: "5", typology: "1+1", scale: "A", totalNetArea: 69.28, commonArea: 29.39, totalArea: 98.67, verandaArea: 27.2, plotArea: 0, storeArea: 15, statusi: "Shitur", shenime: "Shefi" },
    { id: "B11", floor: "1", typology: "1+1", scale: "B", totalNetArea: 71.21, commonArea: 30.21, totalArea: 101.42, verandaArea: 4.72, plotArea: 0, storeArea: 15.87, statusi: "Rezervuar", shenime: "Hektori" },
    { id: "B13", floor: "1", typology: "2+1", scale: "B", totalNetArea: 118.74, commonArea: 50.37, totalArea: 169.11, verandaArea: 148.85, plotArea: 0, storeArea: 15.85, statusi: "Per shitje", shenime: "0" },
    { id: "B14", floor: "1", typology: "2+1", scale: "B", totalNetArea: 98.23, commonArea: 41.67, totalArea: 139.9, verandaArea: 152.41, plotArea: 0, storeArea: 33.1, statusi: "Per shitje", shenime: "0" },
    { id: "B23", floor: "2", typology: "2+1", scale: "B", totalNetArea: 99.79, commonArea: 42.33, totalArea: 142.12, verandaArea: 70.82, plotArea: 0, storeArea: 20.25, statusi: "Shitur", shenime: "Akili" },
    { id: "B24", floor: "2", typology: "2+1", scale: "B", totalNetArea: 87.4, commonArea: 37.08, totalArea: 124.48, verandaArea: 4.18, plotArea: 0, storeArea: 15.45, statusi: "Shitur", shenime: "Lori" },
    { id: "B26", floor: "2", typology: "1+1", scale: "B", totalNetArea: 65.9, commonArea: 27.96, totalArea: 93.86, verandaArea: 103.37, plotArea: 0, storeArea: 16.11, statusi: "Per shitje", shenime: "0" },
    { id: "B32", floor: "3", typology: "1+1", scale: "B", totalNetArea: 71.26, commonArea: 30.23, totalArea: 101.49, verandaArea: 11.17, plotArea: 0, storeArea: 13.02, statusi: "Shitur", shenime: "Armand Shapku" },
    { id: "B33", floor: "3", typology: "2+1", scale: "B", totalNetArea: 95.58, commonArea: 40.55, totalArea: 136.13, verandaArea: 66.68, plotArea: 0, storeArea: 15.87, statusi: "Shitur", shenime: "Akili" },
    { id: "B34", floor: "3", typology: "2+1", scale: "B", totalNetArea: 94.22, commonArea: 39.97, totalArea: 134.19, verandaArea: 18.9, plotArea: 0, storeArea: 0, statusi: "Shitur", shenime: "Lori" },
    { id: "B36", floor: "3", typology: "1+1", scale: "B", totalNetArea: 68.8, commonArea: 29.19, totalArea: 97.99, verandaArea: 0, plotArea: 225.63, storeArea: 17.25, statusi: "Per shitje", shenime: "0" },
    { id: "B42", floor: "4", typology: "2+1", scale: "B", totalNetArea: 93.9, commonArea: 39.83, totalArea: 133.73, verandaArea: 0, plotArea: 0, storeArea: 26.08, statusi: "Shitur", shenime: "Lori" },
    { id: "B43", floor: "4", typology: "2+1", scale: "B", totalNetArea: 91.64, commonArea: 38.87, totalArea: 130.51, verandaArea: 0, plotArea: 0, storeArea: 15.85, statusi: "Shitur", shenime: "Nexhmi Aliaj" },
    { id: "B51", floor: "5", typology: "2+1", scale: "B", totalNetArea: 91.92, commonArea: 38.99, totalArea: 130.91, verandaArea: 2.62, plotArea: 0, storeArea: 30.36, statusi: "Rezervuar", shenime: "Shoku i shefit" },
    { id: "B52", floor: "5", typology: "2+1", scale: "B", totalNetArea: 88.61, commonArea: 37.59, totalArea: 126.2, verandaArea: 4.45, plotArea: 0, storeArea: 25.57, statusi: "Shitur", shenime: "Skender Bedalli" },

]



function showApartmentDetails(apartmentId) {

    const details = apartmentDetails.find(apartment => apartment.id === apartmentId);
    // Find the apartment details by ID
    if (details) {
        // Populate the details table
        document.getElementById('aptId').textContent = details.id;
        document.getElementById('aptScale').textContent = details.scale;
        document.getElementById('aptTypology').textContent = details.typology;
        document.getElementById('aptFloor').textContent = details.floor;
        document.getElementById('aptNetArea').textContent = details.totalNetArea;
        document.getElementById('aptComonArea').textContent = details.commonArea;
        document.getElementById('aptTotalArea').textContent = details.totalArea;
        document.getElementById('aptVerandaArea').textContent = details.verandaArea;
        document.getElementById('aptgreenArea').textContent = details.plotArea;
        document.getElementById('aptstoreArea').textContent = details.storeArea;
        document.getElementById('aptParking').textContent = details.Parking;
        document.getElementById('status').textContent = details.statusi;

    }
}

console.log("Apartment details loaded:", apartmentDetails);

// --- Filter by Typology on dropdown change
document.getElementById('typologyFilter').addEventListener('change', () => {
  const selectedTypology = document.getElementById('typologyFilter').value;

  apartmentDetails.forEach(apartment => {
    const btn = document.getElementById(apartment.id);
    if (!btn) return;

    if (!selectedTypology || apartment.typology === selectedTypology) {
       btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
  });
});

// --- Filter by Area on button click
function filterByArea() {
  const maxArea = parseFloat(document.getElementById('areaFilter').value);
      const input = document.getElementById('areaFilter');
    const value = input.value.trim();
    if (value==='') return; // Do nothing if no value


  apartmentDetails.forEach(apartment => {
    const btn = document.getElementById(apartment.id);
    if (!btn) return;

    if (!isNaN(maxArea) && apartment.totalArea <= maxArea) {
      btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to buttons "ith class 'ApBtn'
    document.querySelectorAll(".planBtn").forEach(button => {
        button.addEventListener("click", function () {
            const apartmentId = button.id; // Extract apartment ID from button ID
            if (apartmentId) {
                showApartmentDetails(apartmentId);
            }
        });
    });



    const shiturText = document.getElementById("shiturShkrimi");
    const rezervuarText = document.getElementById("rezervuarShkrimi");

    apartmentDetails.forEach(apartment => {
        const button = document.getElementById(apartment.id); // Get the button by ID
        if (button) {
            // Apply initial colors
            if (apartment.statusi === "Shitur") {
                button.style.backgroundImage = "linear-gradient(to top, #FFB9B9 0%, #ff9999 80%, #FDFDFD 100%)";
                button.style.color = "#A80000";
                button.style.fontWeight = "bold";
            } else if (apartment.statusi === "Rezervuar") {
                button.style.backgroundImage = "linear-gradient(to top, #FFEBD1 0%, #ffC170 80%, #FDFDFD 100%)";
                button.style.color = "red";
                button.style.fontWeight = "bold";

            }

            // Add click event listener
            button.addEventListener("click", function () {
                if (apartment.statusi === "Shitur") {
                    shiturText.classList.remove("hidden");
                    rezervuarText.classList.add("hidden");
                } else if (apartment.statusi === "Rezervuar") {
                    rezervuarText.classList.remove("hidden");
                    shiturText.classList.add("hidden");
                } else {
                    shiturText.classList.add("hidden");
                    rezervuarText.classList.add("hidden");
                }
            });
        }


    const displayImage = document.getElementById("display-image");
    const fullscreenContainer = document.getElementById("fullscreenContainer");
    const fullscreenImage = document.getElementById("fullscreenImage");
    const planContainer = document.getElementById("plan-container");

    // 📌 Buttons that trigger the image
    document.querySelectorAll(".planBtn").forEach(button => {
        button.addEventListener("click", () => {

            const imageSrc = `PlanetG7B/${button.id}.webp`;

            // Display the image in main vie"
            displayImage.src = imageSrc;
            // Sho" the container if it "as hidden
                planContainer.style.display = "block";
        });
    });

    // Click on display image → open fullscreen
    displayImage.addEventListener("click", () => {
        fullscreenImage.src = displayImage.src;
        fullscreenContainer.classList.remove("hidden");

        // Request full screen (Works best on mobile)
        if (fullscreenContainer.requestFullscreen) {
            fullscreenContainer.requestFullscreen();
        } else if (fullscreenContainer.webkitRequestFullscreen) {
            fullscreenContainer.webkitRequestFullscreen(); // Safari
        } else if (fullscreenContainer.msRequestFullscreen) {
            fullscreenContainer.msRequestFullscreen(); // IE
        }
    });

    // 🔙 Click on fullscreen image → close fullscreen
    fullscreenImage.addEventListener("click", () => {
        fullscreenContainer.classList.add("hidden");

        // Exit full screen
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else if (document.msFullscreenElement) {
            document.msExitFullscreen();
        }
    });
    window.addEventListener("orientationchange", () => {
        // Force redra"/resizing (if needed)
        if (document.fullscreenElement) {
            fullscreenImage.style.maxwidth = window.innerwidth + "px";
            fullscreenImage.style.maxHeight = window.innerHeight + "px";
        }
    });

    //  Click outside image in plan-container → hide container
    planContainer.addEventListener("click", (event) => {
        if (!event.target.closest("#display-image")) {
            planContainer.style.display = "none";
            document.getElementById("shiturShkrimi").classList.add("hidden");
            document.getElementById("rezervuarShkrimi").classList.add("hidden");
        }
    });

});

})
document.getElementById("calculationG7B").addEventListener("click", function () {
    document.getElementById("priceForm").style.display = "block";
});

function populateApartments() {
    const sector = document.getElementById("sector_select").value;
    const apartmentSelect = document.getElementById("apartment_select");
    apartmentSelect.innerHTML = '<option value="">-- Zgjidh --</option>';

    const filtered = apartmentDetails.filter(a => a.id.startsWith(sector));
    filtered.forEach(a => {
        const option = document.createElement("option");
        option.value = a.id;
        option.textContent = a.id;
        apartmentSelect.appendChild(option);
    });
}

function closeResult() {
    document.getElementById("detailed_result").style.display = "none";
    document.getElementById("priceForm").style.display = "none";

}


function calculateTotal() {
    const apartmentID = document.getElementById("apartment_select").value;
    const apt = apartmentDetails.find(a => a.id === apartmentID);

    if (!apt) {
        alert("Please select a valid apartment.");
        return;
    }

    const priceNet = parseFloat(document.getElementById("price_net").value) || 0;
    const priceCommon = parseFloat(document.getElementById("price_common").value) || 0;
    const priceTerrace = parseFloat(document.getElementById("price_terrace").value) || 0;
    const pricePlot = parseFloat(document.getElementById("price_plot").value) || 0;
    const priceParking = parseFloat(document.getElementById("price_parking").value) || 0;
    const pricePool = parseFloat(document.getElementById("price_pool").value) || 0;
    const priceDepo = parseFloat(document.getElementById("price_depo").value) || 0;


    const items = [
        { label: "Sipërfaqe Neto", qty: apt.totalNetArea, unit: priceNet },
        { label: "Sipër.e përbashkët", qty: apt.commonArea, unit: priceCommon },
        { label: "Veranda", qty: apt.verandaArea, unit: priceTerrace },
        { label: "Oborri", qty: apt.plotArea, unit: pricePlot },
        { label: "Depo", qty: apt.storeArea, unit: priceDepo },
        { label: "Parkim", qty: 1, unit: priceParking },
    ];

    const tbody = document.getElementById("result_body");
    tbody.innerHTML = "";

    let total = 0;
    items.forEach(item => {
        const subtotal = item.qty * item.unit;
        total += subtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
      <td style="padding: 5px; border: 1px solid #ccc;">${item.label}</td>
      <td style="text-align: right; padding: 5px; border: 1px solid #ccc;">${item.qty.toFixed(2)}</td>
      <td style="text-align: right; padding: 5px; border: 1px solid #ccc;">€${item.unit.toLocaleString(undefined, { minimumFractionDigits: 0 })}</td>
      <td style="text-align: right; padding: 5px; border: 1px solid #ccc;">€${subtotal.toLocaleString(undefined, { minimumFractionDigits: 0 })}</td>
    `;
        tbody.appendChild(row);
    });

    document.getElementById("total_cell").textContent = `€${total.toLocaleString(undefined, { minimumFractionDigits: 0 })}`;
    document.getElementById("result_title").textContent = `Apartamenti ${apt.id}`;
    document.getElementById("detailed_result").style.display = "block";
}
function updateFormattedAll() {
    const fields = [
        { input: 'price_net', display: 'formatted_price_net' },
        { input: 'price_common', display: 'formatted_price_common' },
        { input: 'price_terrace', display: 'formatted_price_terrace' },
        { input: 'price_plot', display: 'formatted_price_plot' },
        { input: 'price_depo', display: 'formatted_price_depo' },
    ];

    const field = [
        { input: 'price_parking', display: 'formatted_price_parking' },
        { input: 'price_pool', display: 'formatted_price_pool' },
    ];

    fields.forEach(field => {
        const inputEl = document.getElementById(field.input);
        const value = parseFloat(inputEl.value);
        const formatted = !isNaN(value) ? value.toLocaleString('en-US') + " €/m²" : '';
        document.getElementById(field.display).textContent = formatted;
    });
    field.forEach(field => {
        const inputEl = document.getElementById(field.input);
        const value = parseFloat(inputEl.value);
        const formatted = !isNaN(value) ? value.toLocaleString('en-US') + " €" : '';
        document.getElementById(field.display).textContent = formatted;
    });

}

// Call once on page load to initialize
window.addEventListener("DOMContentLoaded", updateFormattedAll);
