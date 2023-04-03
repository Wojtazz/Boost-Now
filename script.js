const buttons = document.querySelectorAll("[data-slider-button]")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.sliderButton === "next" ? 1:-1
        const slides = button
            .closest("[data-slider]")
            .querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0


        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

        if(newIndex == 1)
        {
            document.getElementById("slider").style.boxShadow = "0 0 35px 20px rgba(217, 164, 48, 0.53)"
        }
        else document.getElementById("slider").style.boxShadow = "0 0 35px 20px rgba(176, 106, 38, 0.53)"
    })
})