        document.addEventListener("DOMContentLoaded", () => {
            const words = ["Hookah", "Chicken", "Subs", "Sandwiches", "Burgers", "Ice Cream", "Quesedillas", "Sushi", "Fresh Juice", "Shawarma", "Wraps", "Hummus", "Labneh", "Shrimp", "Soup", "Fruit", "Cake", "Service"]
    
 
            let index = 0;
            const container = document.querySelector(".rotator-container");

            // Insert first word
            const current = document.createElement("span");
            current.textContent = words[index];
            container.appendChild(current);

            setInterval(() => {
            // Slide out current word
                const oldWord = container.querySelector("span");
                oldWord.style.animation = "slideOut 0.6s ease forwards";

                // Slide in new word
                index = (index + 1) % words.length;
                const newWord = document.createElement("span");
                newWord.textContent = words[index];
                newWord.style.animation = "slideIn 0.6s ease forwards";

                container.appendChild(newWord);

                // Remove old word after animation completes
                setTimeout(() => {
                    if (oldWord) container.removeChild(oldWord);
                }, 600);
            }, 3000);
        });