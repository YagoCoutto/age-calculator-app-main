const button = document.querySelector('button')
const input = document.querySelectorAll('input')
const strong = document.querySelectorAll('strong')
const label = document.querySelectorAll('.Red')
const msgRequired = document.querySelectorAll('.redMsg')


button.addEventListener("click", function () {
    //pegar data atual
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonths = currentDate.getMonth() + 1
    const currentDays = currentDate.getDate()
    //calcular idade
    function calc() {
        let getDays = currentDays - input[0].value
        let getMonths = currentMonths - input[1].value
        let getYears = currentYear - input[2].value

        function err() {

            //empty
            for (let i = 0; i < 3; i++) {
                if (input[i].value === '') {
                    input[i].classList.add('required')
                    label[i].classList.add('P_Red')
                    msgRequired[i].innerHTML = 'This field is required'
                    msgRequired[i].classList.add('fieldRequired')
                    
                    if (parseInt(input[0].value, 10) > 31 || parseInt(input[0].value, 10) < 1) {
                        input[0].classList.add('required')
                        label[0].classList.add('P_Red')
                        msgRequired[0].innerHTML = 'must be a valid day'
                        msgRequired[0].classList.add('fieldRequired')
                    }else if (parseInt(input[1].value, 10) > 12 || parseInt(input[1].value, 10) < 1) {
                        input[1].classList.add('required')
                        label[1].classList.add('P_Red')
                        msgRequired[1].innerHTML = 'must be a valid day'
                        msgRequired[1].classList.add('fieldRequired')
                    }else if (parseInt(input[2].value, 10) < 2023) {//???????
                        input[2].classList.add('required')
                        label[2].classList.add('P_Red')
                        msgRequired[2].innerHTML = 'must be a valid day'
                        msgRequired[2].classList.add('fieldRequired')
                    }

                } else {
                    input[i].classList.remove('required')
                    label[i].classList.remove('P_Red')
                    msgRequired[i].innerHTML = ''
                    msgRequired[i].classList.remove('fieldRequired')
                }
            }
        }
        err()
        //day
        if (currentDays >= input[0].value) {
            getDays = currentDays - input[0].value
            getMonths = currentMonths - input[1].value
            console.log('retornou ' + getDays)
        } else {
            getDays = 31 + (currentDays - input[0].value)
        }
        //month
        if (currentMonths >= input[1].value) {
            getMonths = currentMonths - input[1].value
        } else {
            getMonths = 12 + (currentMonths - input[1].value)
            getYears = (currentYear - input[2].value) - 1
        }

        return {
            setDay: getDays,
            setMonth: getMonths,
            setYear: getYears
        }
    }
    calc(currentYear, currentMonths, currentDays)

    //exibir valores
    function print() {
        const printCalc = calc();
        strong[0].innerHTML = `${printCalc.setYear} `
        strong[1].innerHTML = `${printCalc.setMonth} `
        strong[2].innerHTML = `${printCalc.setDay} `
        //console.log(printCalc.setDay)
    }
    print()

});