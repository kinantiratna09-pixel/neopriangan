const languageSwitcher = document.getElementById("languageSwitcher");

languageSwitcher.addEventListener("change", async function() {

    const target = this.value;

    const elements = document.querySelectorAll("[data-translate]");

    for (const element of elements) {

        const original = element.dataset.original || element.innerText;

        element.dataset.original = original;

        const response = await fetch("api/translate.php", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: original,
                target: target
            })

        });

        const data = await response.json();

        element.innerText = data.translation;

    }

});