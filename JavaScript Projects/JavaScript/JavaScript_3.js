function displayModel(company) {
    var companyType = company.getAttribute('data-company-type');
    alert(companyType + " is manufactured by " + company.innerHTML + " company!");
}