
const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
});

function calculate() {
    const purchase = Number(document.querySelector("#purchase").value);
    const rehab = Number(document.querySelector("#rehab").value);
    const arv = Number(document.querySelector("#arv").value);
    const hold = Number(document.querySelector("#hold").value);
    const holdCost = Number(document.querySelector("#holdcost").value);
    const sellCost = Number(document.querySelector("#sellcost").value);

    const totalCost = purchase + rehab + (hold * holdCost) + sellCost;
    const profit = arv - totalCost;
    const roi = profit / totalCost * 100;
    const maxOffer = arv * .7 - rehab;

    if (purchase === 0 || arv === 0) {
        document.querySelector("#total-cost").textContent = "---";
        document.querySelector("#profit").textContent = "---";
        document.querySelector("#roi").textContent = "---";
        document.querySelector("#max-offer").textContent ="---";
        return;
    } else {
        document.querySelector("#total-cost").textContent = money.format(totalCost);
        document.querySelector("#profit").textContent = money.format(profit);
        document.querySelector("#roi").textContent = roi.toFixed(1) + "%";
        document.querySelector("#max-offer").textContent = money.format(maxOffer);
    }



}

document.querySelectorAll("input").forEach((field) => {
    field.addEventListener("input", calculate);
});