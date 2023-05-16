const Submit = document.querySelector('button')
const getValues = document.querySelectorAll('input')
const strong = document.querySelectorAll('strong')
const label = document.querySelectorAll('.Red')
const msgRequired = document.querySelectorAll('.redMsg')
//Get Date
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonths = currentDate.getMonth() + 1
const currentDays = currentDate.getDate()
const totDays = new Date(currentYear, currentMonths, 0).getDate()
let teste = false

//event inputs
function inputss() {
    for (let cont = 0; cont < 3; cont++) {
        getValues[cont].addEventListener('blur', function () {
            console.log('oi ' + cont)

            function empty() {
                //empty
                for (let i = 0; i < 3; i++) {
                    if (getValues[i].value == '') {
                        getValues[i].classList.add('required')
                        label[i].classList.add('P_Red')
                        msgRequired[i].innerHTML = 'This field is required'
                        msgRequired[i].classList.add('fieldRequired')
                        teste = false
                    } else {
                        getValues[i].classList.remove('required')
                        label[i].classList.remove('P_Red')
                        msgRequired[i].innerHTML = ''
                        msgRequired[i].classList.remove('fieldRequired')
                        teste = true
                    }
                }
            }
            empty()

            function invalidValue() {
                //day invalid
                if (parseInt(getValues[0].value, 10) > totDays || parseInt(getValues[0].value, 10) < 1) {
                    getValues[0].classList.add('required')
                    label[0].classList.add('P_Red')
                    msgRequired[0].innerHTML = 'must be a valid day'
                    msgRequired[0].classList.add('fieldRequired')
                }
                if (parseInt(getValues[1].value, 10) > 12 || parseInt(getValues[1].value, 10) < 1) {
                    getValues[1].classList.add('required')
                    label[1].classList.add('P_Red')
                    msgRequired[1].innerHTML = 'must be a valid day'
                    msgRequired[1].classList.add('fieldRequired')
                }
                if (parseInt(getValues[2].value, 10) > currentYear) {
                    getValues[2].classList.add('required')
                    label[2].classList.add('P_Red')
                    msgRequired[2].innerHTML = 'must be a valid day'
                    msgRequired[2].classList.add('fieldRequired')
                    console.log(typeof (parseInt(getValues[2].value, 10)) + ' test data')
                }
            }
            invalidValue()
        })
    }
}
inputss()

Submit.addEventListener("click", function () {

    //calcular idade
    function calc() {
        let getDays = currentDays - getValues[0].value
        let getMonths = currentMonths - getValues[1].value
        let getYears = currentYear - getValues[2].value


        //day
        if (currentDays >= getValues[0].value) {
            getDays = currentDays - getValues[0].value
            getMonths = currentMonths - getValues[1].value
        } else {
            getDays = 31 + (currentDays - getValues[0].value)
        }
        //month
        if (currentMonths >= getValues[1].value) {
            getMonths = currentMonths - getValues[1].value
        } else {
            getMonths = 12 + (currentMonths - getValues[1].value)
            getYears = (currentYear - getValues[2].value) - 1
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
        if (teste != false) {
            strong[0].innerHTML = `${printCalc.setYear} `
            strong[1].innerHTML = `${printCalc.setMonth} `
            strong[2].innerHTML = `${printCalc.setDay} `
            console.log(teste)
        } else {
            strong[0].innerHTML = `- - `
            strong[1].innerHTML = `- - `
            strong[2].innerHTML = `- - `
        }
    }
    print()

});