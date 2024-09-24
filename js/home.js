//Noakhali
document.getElementById('btn-noakhali').addEventListener('click', function () {

    const donationNoakhali = parseFloat(document.getElementById('donaton-noakhali').value);
    //console.log(donationNoakhali);

    const totalMoney = parseFloat(document.getElementById('total-money').innerText);
    //console.log(totalMoney)
    const moneyNoakhali = parseFloat(document.getElementById('money-noakhali').innerText);

    if (donationNoakhali > 0 || donationNoakhali <= totalMoney && donationNoakhali === 'number') {
        //console.log('add money');

        const newMoney = totalMoney - donationNoakhali;
        //console.log(newMoney);
        document.getElementById('total-money').innerText = newMoney;
        const newMoneyNoakhali = moneyNoakhali + donationNoakhali;
        //console.log(newMoneyNoakhali)
        document.getElementById('money-noakhali').innerText = newMoneyNoakhali;

        const div = document.createElement('div');
        div.innerHTML = `
            <h2 class="card-title text-primary text-lg lg:text-xl font-bold"> ${donationNoakhali} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
            <p class="text-[#111111B3] text-sm lg:text-xl">Date: ${new Date().toLocaleDateString()} Time:${new Date().toLocaleTimeString()}</p>
        `
        document.getElementById('history-noakhali').appendChild(div);

        document.getElementById('my_modal_1').showModal();

    }

    else {
        alert('plese enter valid donation')
    }
});

//Feni
document.getElementById('btn-feni').addEventListener('click', function () {

    const donationFeni = parseFloat(document.getElementById('donation-feni').value);
    //console.log(donationNoakhali);

    const totalMoney = parseFloat(document.getElementById('total-money').innerText);
    //console.log(totalMoney)
    const moneyFeni = parseFloat(document.getElementById('money-feni').innerText);

    if (donationFeni > 0 || donationFeni <= totalMoney && donationFeni === 'number') {
        //console.log('add money');

        const newMoney = totalMoney - donationFeni;
        //console.log(newMoney);
        document.getElementById('total-money').innerText = newMoney;
        const newMoneyFeni = moneyFeni + donationFeni;
        //console.log(newMoneyNoakhali)
        document.getElementById('money-feni').innerText = newMoneyFeni;

        // history for noakhali

        const div = document.createElement('div');
        div.innerHTML = `
            <h2 class="card-title text-primary text-lg lg:text-xl font-bold"> ${donationFeni} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
            <p class="text-[#111111B3] text-sm lg:text-xl">Date: ${new Date().toLocaleDateString()} Time:${new Date().toLocaleTimeString()}</p>
        `
        document.getElementById('history-feni').appendChild(div);
        document.getElementById('my_modal_1').showModal();

    }

    else {
        alert('plese enter valid donation')
    }
});


//Donation for Injured
document.getElementById('btn-injured').addEventListener('click', function () {

    const donationInjured = parseFloat(document.getElementById('donation-injured').value);
    //console.log(donationNoakhali);

    const totalMoney = parseFloat(document.getElementById('total-money').innerText);
    //console.log(totalMoney)
    const moneyInjured = parseFloat(document.getElementById('money-injured').innerText);

    if (donationInjured > 0 || donationInjured <= totalMoney && donationInjured === 'number') {
        //console.log('add money');

        const newMoney = totalMoney - donationInjured;
        //console.log(newMoney);
        document.getElementById('total-money').innerText = newMoney;
        const newMoneyInjured = moneyInjured + donationInjured;
        //console.log(newMoneyNoakhali)
        document.getElementById('money-injured').innerText = newMoneyInjured;

        const div = document.createElement('div');
        div.innerHTML = `
            <h2 class="card-title text-primary text-lg lg:text-xl font-bold"> ${donationInjured} Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
            <p class="text-[#111111B3] text-sm lg:text-xl">Date: ${new Date().toLocaleDateString()} Time:${new Date().toLocaleTimeString()}</p>
        `
        document.getElementById('history-injured').appendChild(div);

        document.getElementById('my_modal_1').showModal();


    }

    else {
        alert('plese enter valid donation')
    }
});

// history tab
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function () {

    historyTab.classList.add('bg-btnColor', 'text-primary');
    historyTab.classList.remove('text-moneyColor');

    donationTab.classList.remove('bg-btnColor', 'text-primary');
    donationTab.classList.add('text-moneyColor');


    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-form').classList.remove('hidden');
});


donationTab.addEventListener('click',function(){
    donationTab.classList.add('bg-btnColor', 'text-primary');
    donationTab.classList.remove('text-moneyColor');

    historyTab.classList.remove('bg-btnColor', 'text-primary');
    historyTab.classList.add('text-moneyColor');

    document.getElementById('donation-form').classList.remove('hidden');
    document.getElementById('history-form').classList.add('hidden');
    

});

