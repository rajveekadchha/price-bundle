document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll('input[name="offer"]');
    const optionsContainers = document.querySelectorAll('.options');
    const totalPriceElement = document.querySelector('.total');

    // Function to update the total price based on the selected offer
    function updateTotalPrice(selectedValue) {
        let price = 0;
        switch (selectedValue) {
            case '1':
                price = 18.00;
                break;
            case '2':
                price = 24.00;
                break;
            case '3':
                price = 36.00;
                break;
        }
        totalPriceElement.textContent = `Total: $${price.toFixed(2)} USD`;
    }

    function applySelectedStyle(selectedRadio) {
        document.querySelectorAll(".offer-item").forEach((offerBox) => {
          offerBox.classList.remove("selected");
        });

        selectedRadio.closest(".offer-item").classList.add("selected");
        
    }

    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', function() {
            optionsContainers.forEach(container => container.style.display = 'none');
            
            const selectedOptions = document.getElementById(`options-${index + 1}`);
            if (selectedOptions) {
                selectedOptions.style.display = 'block';
                
            }

            updateTotalPrice(this.value); 
            applySelectedStyle(this); 
        });
    });

   
});
