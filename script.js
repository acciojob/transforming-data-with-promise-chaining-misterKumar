//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
        // Get the input value
        const inputNumber = document.getElementById("ip").value;

        // Create a promise that resolves after 2 seconds
        const promise1 = new Promise((resolve) => {
          setTimeout(() => {
            resolve(inputNumber);
          }, 2000);
        });

        // Chain promises to perform calculations
        promise1
          .then((result) => {
            // Display the result of the first promise
            document.getElementById("output").textContent = `Result: ${result}`;
            // Return a new promise that multiplies the result by 2 after 1 second
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(result * 2);
              }, 1000);
            });
          })
          .then((result) => {
            // Display the result of the second promise
            document.getElementById("output").textContent = `Result: ${result}`;
            // Return a new promise that subtracts 3 from the result after 1 second
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(result - 3);
              }, 1000);
            });
          })
          .then((result) => {
            // Display the result of the third promise
            document.getElementById("output").textContent = `Result: ${result}`;
            // Return a new promise that divides the result by 2 after 1 second
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(result / 2);
              }, 1000);
            });
          })
          .then((result) => {
            // Display the result of the fourth promise
            document.getElementById("output").textContent = `Result: ${result}`;
            // Return a new promise that adds 10 to the result after 1 second
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(result + 10);
              }, 1000);
            });
          })
          .then((result) => {
            // Display the final result
            document.getElementById("output").textContent = `Final Result: ${result}`;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });