console.log("CONNECTED!");

const getData = async () => {
  const loading = document.querySelector(".pre-load");
  const cardContent = document.querySelector(".card-content");
  const costPerCredit = document.querySelector(".cost-per-credit span");
  const costPerCreditKey = document.querySelector(".cost-per-credit strong");
  const totalTuition = document.querySelector(".total-tuition span");
  const totalFeesEl = document.querySelector(".total-fees span");
  const creditHours = document.querySelector(".credit-hours span");

  const loadingHTML = '<p style="font-size: 2rem">Loading....</p>';
  const noDataHTML = `
    <p style="font-size: 3rem">NO DATA</p>
    <p>Please review your selections in the content type.</p>
  `;
  const errorHTML = `
    <p style="font-size: 3rem">ERROR</p>
    <p>There's seems to be an issue right now, please check back later or contact an admin</p>
  `

  const {
    dataset: { school, program },
  } = cardContent;

  if (!school || typeof school !== "string" || school.length < 3) return (loading.innerHTML = noDataHTML);
  if (!program || typeof program !== "string") return (loading.innerHTML = noDataHTML);

  const url = `https://dintprx.erp.fordham.edu/student_calculator/data/calcjson.jsp?wchSchool=${school}`;

  // Temporary
  loading.innerHTML = loadingHTML;

  try {
    const res = await fetch(url);
    const data = await res.json();
    let totalCreditCost = 0;
    let totalFees = 0;
    let term = [];

    const totalCreditHours = parseInt(creditHours.innerText);
    const { value, status } = data;
  
    if (status !== "notdone") {
      cardContent.style.display = "block";
      loading.style.display = "none";
      loading.innerHTML = "";
    } else {
      loading.innerHTML = noDataHTML;
      cardContent.innerHTML = "";
    }

    value.forEach((val) => {
      const { costtype, section, type, name, disfall } = val;
      const lcased = {
        costtype: costtype?.toLowerCase(),
        section: section?.toLowerCase(),
        type: type?.toLowerCase(),
        name: name?.toLowerCase(),
        disfall: disfall.toLowerCase(),
        program: program?.toLowerCase(),
      };

      const isMatch = lcased.costtype === "direct" && lcased.section === lcased.program && lcased.disfall === "y";
      const isFees = (lcased.type === "term" && lcased.name === "fees") || (lcased.type === "credit" && lcased.name === "fees");

      if (isMatch) {
        console.log(val);
        if (isFees) {
          totalFees = val.default * 2;
        } else {
          totalCreditCost = val.default;
        }
        term.push(type.toLowerCase());
      }
    });

    const isTerm = term.every((item) => item === "term");
    costPerCredit.innerText = `$ ${totalCreditCost}`;
    totalFeesEl.innerText = `$ ${totalFees}`;

    console.log(term);
    console.log(isTerm);

    if (term.length < 1) {
      loading.innerHTML = noDataHTML;
      loading.style.display = "block";
      cardContent.style.display = "none";
      cardContent.innerHTML = "";
    }

    if (!isTerm) {
      totalTuition.innerText = `$ ${totalCreditHours * totalCreditCost + totalFees}`;
    } else {
      totalTuition.innerText = `$ ${totalCreditCost * 2 + totalFees}`;
      costPerCreditKey.innerText = "Cost Per Term:";
      creditHours.innerText = "-";
    }
  } catch (err) {
    loading.innerHTML = errorHTML;
    cardContent.innerHTML = "";
    throw err.message;
  }
};

document.addEventListener("DOMContentLoaded", getData());
