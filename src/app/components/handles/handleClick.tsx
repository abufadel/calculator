let test = 0;
let currentNum 
const handleClick = (e: any) => {
    let screen = document.querySelector('.screen');
    
    // to put the number on the screen
    if (
        e.target.innerHTML == '1' ||
        e.target.innerHTML == '2' ||
        e.target.innerHTML == '3' ||
        e.target.innerHTML == '4' ||
        e.target.innerHTML == '5' ||
        e.target.innerHTML == '6' ||
        e.target.innerHTML == '7' ||
        e.target.innerHTML == '8' ||
        e.target.innerHTML == '9' ||
        e.target.innerHTML == '0'
    ) {
        if (screen.innerHTML == '0') {
            screen.innerHTML = e.target.innerHTML;
        }
        else {
            screen.innerHTML += e.target.innerHTML;
        }
        test = 1;
        currentNum = e.target.innerHTML
    }

    // to put the marks on the screen

    if (
        test &&
        (
            e.target.innerHTML == '+' ||
            e.target.innerHTML == '-' ||
            e.target.innerHTML == '/' ||
            e.target.innerHTML == '*'
        )
    ) {
        screen.innerHTML += e.target.innerHTML.toLowerCase();
        test = 0;
        currentNum = e.target.innerHTML
    }
    if (
        e.target.innerHTML == 'Reset'
    ) {
        screen.innerHTML = '0';
        test = 0;
        currentNum = e.target.innerHTML
    }
    if (
        e.target.innerHTML == 'Del'
    ) {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    }
    if (
        e.target.innerHTML == '='
        ) {
        let result;
        result = eval(screen.innerHTML);
        screen.innerHTML = result
    }


}

export default handleClick;