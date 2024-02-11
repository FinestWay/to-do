let input = document.querySelector("input");

        input.addEventListener("keydown", (e) => {
            let li = document.createElement("li");
            if (e.keyCode === 13) {
                li.innerText = `${input.value}`
                const parent = document.querySelector("ul");
                parent.appendChild(li);
                input.value = "";
            }
        });