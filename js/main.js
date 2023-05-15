const button = document.querySelector('button')
const input = document.querySelectorAll('input')
const strong = document.querySelectorAll('strong')



button.addEventListener("click", function () {
    //pegar data atual
    const date = new Date()
    const year = date.getFullYear()
    const months = date.getMonth() + 1
    const days = date.getDate()

    console.log(typeof(date.days))
    //calcular idade
    function calc() {
        let getDays = 0
        if(days > input[0].value){
            getDays = days - input[0].value
            console.log(getDays + ' dentro do if')
        }else{
            //criar calculo de dia menor
        }



        const getMonths = months - input[1].value
        const getYears = year - input[2].value
       return {
           setDay: getDays,
           setMonth: getMonths,
           setYear: getYears
        }
    }
    calc(year, months, days)
    
    //exibir valores
    function print() {
        const printCalc = calc();
        strong[0].innerHTML = `${printCalc.setYear} `
        strong[1].innerHTML = `${printCalc.setMonth} `
        strong[2].innerHTML = `${printCalc.setDay} `
        console.log(printCalc.setDay)
    }
    print()

});