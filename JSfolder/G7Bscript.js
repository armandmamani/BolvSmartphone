// JavaScript source code
const apartmentDetails = [
{ id: "C02", floor: "0", typology: "1+1", scale: "C", totalNetArea: 69.75, commonArea: 29.59, totalArea: 99.34, verandaArea: 18.57, plotArea: 0, storeArea: 17.03, statusi: "Shitur",  building: "0", shenime: "Lori" },
{ id: "C03", floor: "0", typology: "1+1", scale: "C", totalNetArea: 70.29, commonArea: 29.82, totalArea: 100.11, verandaArea: 30.98, plotArea: 0, storeArea: 17.03, statusi: "Shitur",  building: "0", shenime: "Renato" },
{ id: "C04", floor: "0", typology: "1+1", scale: "C", totalNetArea: 66.19, commonArea: 28.08, totalArea: 94.27, verandaArea: 76.61, plotArea: 0, storeArea : 17.86, statusi: "Rezervuar",  building: "0", shenime: "Hektori" },
{ id: "C06", floor: "0", typology: "2+1", scale: "C", totalNetArea: 112.25, commonArea: 47.62, totalArea: 159.87, verandaArea: 16.03, plotArea: 0, storeArea : 17.03, statusi: "Shitur",  building: "0", shenime: "Akili" },
{ id: "A11", floor: "1", typology: "Studio", scale: "A", totalNetArea: 58.9, commonArea: 24.99, totalArea: 83.89, verandaArea: 71.33, plotArea: 0, storeArea: 0, statusi: "Rezervuar",  building: "0", shenime: "Hektori" },
{ id: "A12", floor: "1", typology: "2+1", scale: "A", totalNetArea: 118.46, commonArea: 50.25, totalArea: 168.71, verandaArea: 175.56, plotArea: 0, storeArea : 16.44, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "A13", floor: "1", typology: "2+1", scale: "A", totalNetArea: 104.43, commonArea: 44.3, totalArea: 148.73, verandaArea: 165.08, plotArea: 0, storeArea : 25.61, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "A24", floor: "2", typology: "1+1", scale: "A", totalNetArea: 67.79, commonArea: 28.76, totalArea: 96.55, verandaArea: 4.35, plotArea: 0, storeArea: 14.85, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "A23", floor: "2", typology: "1+1", scale: "A", totalNetArea: 65.92, commonArea: 27.96, totalArea: 93.88, verandaArea: 38.21, plotArea: 0, storeArea: 13.62, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "A31", floor: "3", typology: "Studio", scale: "A", totalNetArea: 53.51, commonArea: 22.7, totalArea: 76.21, verandaArea: 0, plotArea: 0, storeArea : 12.69, statusi: "Shitur",  building: "0", shenime: "Shefi" },
{ id: "A34", floor: "3", typology: "1+1", scale: "A", totalNetArea: 71.77, commonArea: 30.45, totalArea: 102.22, verandaArea: 21.64, plotArea: 0, storeArea : 12.58, statusi: "Shitur",  building: "0", shenime: "Mark Pjetergjoka" },
{ id: "A35", floor: "3", typology: "2+1", scale: "A", totalNetArea: 90.94, commonArea: 38.58, totalArea: 129.52, verandaArea: 36.79, plotArea: 0, storeArea: 11.05, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "A41", floor: "4", typology: "1+1", scale: "A", totalNetArea: 71.57, commonArea: 30.36, totalArea: 101.93, verandaArea: 0, plotArea: 0, storeArea: 11.05, statusi: "Shitur",  building: "0", shenime: "Shefi" },
{ id: "A42", floor: "4", typology: "1+1", scale: "A", totalNetArea: 68.23, commonArea: 28.94, totalArea: 97.17, verandaArea: 6.99, plotArea: 0, storeArea: 14.85, statusi: "Shitur",  building: "0", shenime: "Lori" },
{ id: "A43", floor: "4", typology: "2+1", scale: "A", totalNetArea: 90.75, commonArea: 38.5, totalArea: 129.25, verandaArea: 0, plotArea: 0, storeArea: 15.75, statusi: "Shitur",  building: "0", shenime: "0" },
{ id: "A51", floor: "5", typology: "1+1", scale: "A", totalNetArea: 69.28, commonArea: 29.39, totalArea: 98.67, verandaArea: 27.2, plotArea: 0, storeArea: 15, statusi: "Shitur",  building: "0", shenime: "Shefi" },
{ id: "B11", floor: "1", typology: "1+1", scale: "B", totalNetArea: 71.21, commonArea: 30.21, totalArea: 101.42, verandaArea: 4.72, plotArea: 0, storeArea : 15.87, statusi: "Rezervuar",  building: "0", shenime: "Hektori" },
{ id: "B13", floor: "1", typology: "2+1", scale: "B", totalNetArea: 118.74, commonArea: 50.37, totalArea: 169.11, verandaArea: 148.85, plotArea: 0, storeArea : 15.85, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "B14", floor: "1", typology: "2+1", scale: "B", totalNetArea: 98.23, commonArea: 41.67, totalArea: 139.9, verandaArea: 152.41, plotArea: 0, storeArea : 33.1, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "B23", floor: "2", typology: "2+1", scale: "B", totalNetArea: 99.79, commonArea: 42.33, totalArea: 142.12, verandaArea: 70.82, plotArea: 0, storeArea : 20.25, statusi: "Shitur",  building: "0", shenime: "Akili" },
{ id: "B24", floor: "2", typology: "2+1", scale: "B", totalNetArea: 87.4, commonArea: 37.08, totalArea: 124.48, verandaArea: 4.18, plotArea: 0, storeArea: 15.45, statusi: "Shitur",  building: "0", shenime: "Lori" },
{ id: "B26", floor: "2", typology: "1+1", scale: "B", totalNetArea: 65.9, commonArea: 27.96, totalArea: 93.86, verandaArea: 103.37, plotArea: 0, storeArea : 16.11, statusi: "Shitur",  building: "0", shenime: "Shefi" },
{ id: "B32", floor: "3", typology: "1+1", scale: "B", totalNetArea: 71.26, commonArea: 30.23, totalArea: 101.49, verandaArea: 11.17, plotArea: 0, storeArea : 13.02, statusi: "Shitur",  building: "0", shenime: "Armand Shapku" },
{ id: "B33", floor: "3", typology: "2+1", scale: "B", totalNetArea: 95.58, commonArea: 40.55, totalArea: 136.13, verandaArea: 66.68, plotArea: 0, storeArea : 15.87, statusi: "Shitur",  building: "0", shenime: "Akili" },
{ id: "B34", floor: "3", typology: "2+1", scale: "B", totalNetArea: 94.22, commonArea: 39.97, totalArea: 134.19, verandaArea: 18.9, plotArea: 0, storeArea: 0, statusi: "Shitur",  building: "0", shenime: "Lori" },
{ id: "B36", floor: "3", typology: "1+1", scale: "B", totalNetArea: 68.8, commonArea: 29.19, totalArea: 97.99, verandaArea: 0, plotArea: 225.63, storeArea : 17.25, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "B42", floor: "4", typology: "2+1", scale: "B", totalNetArea: 93.9, commonArea: 39.83, totalArea: 133.73, verandaArea: 0, plotArea: 0, storeArea: 26.08, statusi: "Shitur",  building: "0", shenime: "Lori" },
{ id: "B43", floor: "4", typology: "2+1", scale: "B", totalNetArea: 91.64, commonArea: 38.87, totalArea: 130.51, verandaArea: 0, plotArea: 0, storeArea : 15.85, statusi: "Shitur",  building: "0", shenime: "Nexhmi Aliaj" },
{ id: "B51", floor: "5", typology: "2+1", scale: "B", totalNetArea: 91.92, commonArea: 38.99, totalArea: 130.91, verandaArea: 2.62, plotArea: 0, storeArea : 30.36, statusi: "Per shitje",  building: "0", shenime: "0" },
{ id: "B52", floor: "5", typology: "2+1", scale: "B", totalNetArea: 88.61, commonArea: 37.59, totalArea: 126.2, verandaArea: 4.45, plotArea: 0, storeArea : 25.57, statusi: "Shitur",  building: "0", shenime: "Skender Bedalli" },

]

function showApartmentDetails(apartmentId) {

    const details = apartmentDetails.find(apartment => apartment.id === apartmentId);
    // Find the apartment details by ID
    if (details) {
        // Populate the details table
        document.getElementById('aptId').textContent = details.id;
        document.getElementById('aptScale').textContent = details.scale;
        document.getElementById('aptTypology').textContent = details.Tipology;
        document.getElementById('aptFloor').textContent = details.floor;
        document.getElementById('aptNetArea').textContent = details.totalNetArea;
        document.getElementById('aptCommonArea').textContent = details.comonArea;
        document.getElementById('aptTotalArea').textContent = details.totalArea;
        document.getElementById('aptVerandaArea').textContent = details.verandaArea;
        document.getElementById('aptgreenArea').textContent = details.plotArea;
        document.getElementById('aptstoreArea').textContent = details.storeArea;
        document.getElementById('status').textContent = details.statusi;

    }
}





document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to buttons with class 'ApBtn'
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
                button.style.backgroundColor = "red";
                button.style.color = "white";
            } else if (apartment.statusi === "Rezervuar") {
                button.style.backgroundColor = "orange";
                button.style.color = "red";
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
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const buttons = [
        { btn: "tipBtnA", table: "tableA", hero: "hero-A" },
        { btn: "tipBtnB", table: "tableB", hero: "hero-B" },
        { btn: "tipBtnC", table: "tableC", hero: "hero-C" }
    ];
    const displayImage = document.getElementById("display-image");
    const fullscreenContainer = document.getElementById("fullscreenContainer");
    const fullscreenImage = document.getElementById("fullscreenImage");
    const planContainer = document.getElementById("plan-container");

    // 📌 Buttons that trigger the image
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            // Extract photo name from button.id
            const match = button.id.match(/H[A-Z0-9]+$/);
            if (!match) return;

            const planName = match[0];
            const imageSrc = `PlanetG7B/${planName}.webp`;

            // Display the image in main view
            displayImage.src = imageSrc;

            // Show the container if it was hidden
            planContainer.classList.remove("hidden");
        });
    });

    // 🖼 Click on display image → open fullscreen
    displayImage.addEventListener("click", () => {
        fullscreenImage.src = displayImage.src;
        fullscreenContainer.classList.remove("hidden");

        // Request full screen (works best on mobile)
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
        // Force redraw/resizing (if needed)
        if (document.fullscreenElement) {
            fullscreenImage.style.maxWidth = window.innerWidth + "px";
            fullscreenImage.style.maxHeight = window.innerHeight + "px";
        }
    });

    // ✖️ Click outside image in plan-container → hide container
    planContainer.addEventListener("click", (event) => {
        if (!event.target.closest("#display-image")) {
            planContainer.classList.add("hidden");
            document.getElementById("shiturShkrimi").classList.add("hidden");
            document.getElementById("rezervuarShkrimi").classList.add("hidden");
        }
    });

});
