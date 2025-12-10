document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".count");
  const letters = document.querySelectorAll(".letter-reveal");
  const duration = 1000; // 1 second
  const steps = 30;

  // Animate numbers
  numbers.forEach((number) => {
    const isCurrency = number.textContent.trim().startsWith("$");
    const targetValue = parseInt(number.dataset.value, 10);
    const increment = Math.ceil(targetValue / steps);
    const interval = Math.floor(duration / steps);
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(counter);
      }
      number.textContent = isCurrency ? `$${current.toLocaleString()}` : current;
    }, interval);
  });

  // Animate text (letter-by-letter)
  letters.forEach((span) => {
    const text = span.textContent;
    span.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        span.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
  });
});


// FOR DYNAMIC DATA FETCHING
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM fully loaded and parsed");

  const google = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT-gfpWH3XRNjg-W8KMA_jtMnX9M4wcAmvBrRlOx8OQd5Db7Sn1pyiZb1jP9qwYH/pub?output=csv");

  if (google.ok) {
    const csv = await google.text();

    // Convert CSV → JSON
    const rows = csv
      .trim()
      .split("\n")
      .map((r) => r.split(","));
    const headers = rows[0];

    const jsonData = rows.slice(1).map((row) => {
      return headers.reduce((obj, header, i) => {
        obj[header] = row[i];
        return obj;
      }, {});
    });

    console.log(jsonData); // Ready to render
  }

  if (!google.ok) {
    console.log("Google Sheets fetch failed, loading local data");
    const local = await fetch("./data/test-data.csv");

    if (!local.ok) {
      console.error("Local data fetch failed");
      return;
    }

    const csv = await local.text();

    // Convert CSV → JSON
    const rows = csv
      .trim()
      .split("\n")
      .map((r) => r.split(","));
    const headers = rows[0];

    const jsonData = rows.slice(1).map((row) => {
      return headers.reduce((obj, header, i) => {
        obj[header] = row[i];
        return obj;
      }, {});
    });
  }
});
