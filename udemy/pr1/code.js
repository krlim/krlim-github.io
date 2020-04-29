let money = prompt("Ваш бюджет на месяц?",""),
    time = prompt("Введите дату в формате YYYY-MM-DD","2020-04-22"),
    appData = {
        moneyData: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };

    for (let i = 0; i < 2; i++)
    {
        appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")] = prompt("Во сколько обойдется?", "");
    }

    alert("Ваш бюджет на 1 день: " + appData.moneyData/30);

