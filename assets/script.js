document.addEventListener("DOMContentLoaded", function () {
    // JSON Verisi
    const productData = {
        "productName": "Power hub - Long Night",
        "productFeatures": "30 ml. Delay Spray",
        "approvalNumber": "NDC 82191-001-10",
        "dealerInfo": "Enc Bitkisel Ltd.",
        "dealerCountry": "Turkey",
        "dealerLicense": "***5135****",
        "barcode": "0168521456871",
        "pDate": "01.2025",
        "expDate": "01.2028"
    };

    // HTML Öğelerini Güncelle
    document.getElementById("product-name").textContent = productData.productName;
    document.getElementById("product-features").textContent = productData.productFeatures;
    document.getElementById("approval-number").textContent = productData.approvalNumber;
    document.getElementById("dealer-info").textContent = productData.dealerInfo;
    document.getElementById("dealer-country").textContent = productData.dealerCountry;
    document.getElementById("dealer-license").textContent = productData.dealerLicense;
    document.getElementById("barcode").textContent = productData.barcode;
    document.getElementById("p-date").textContent = productData.pDate;
    document.getElementById("exp-date").textContent = productData.expDate;
});
