function reverse(st) {
    st = st.split("");
    let start = 0;
    let end = st.length - 1;
    while(start<end) {
        if(isChar(st[start])&&isChar(st[end])){
            temp = st[start];
            st[start] = st[end];
            st[end] = temp;
            start++;
            end--;
        }else{
            if(!isChar(st[start])){
                start++;
            }
            if(!isChar(st[end])){
                end--;
            }
        }
    }
    console.log(st.join(""));    
}

function isChar(key) {
    if((key <="Z" && key >="A") || (key <="z" && key >="a")) {
        return true;
    }
    return false;

}

reverse("A&x#");