function basicMath (op,n1,n2){
    switch(op){
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case '/':
            return n1/n2;
        default:
            return 'Invalid operator'
    }
}