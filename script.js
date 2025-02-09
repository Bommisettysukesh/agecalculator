function calculateAge() {
    let birthdate = document.getElementById('birthdate').value;
    let givenDate = document.getElementById('givenDate').value;
    
    if (!birthdate || !givenDate) {
        document.getElementById('result').innerHTML = "Please enter both dates.";
        return;
    }
    
    let birth = new Date(birthdate);
    let given = new Date(givenDate);
    
    let years = given.getFullYear() - birth.getFullYear();
    let months = given.getMonth() - birth.getMonth();
    let days = given.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(given.getFullYear(), given.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    
    document.getElementById('result').innerHTML = `You are ${years} years, ${months} months, and ${days} days old `;
}