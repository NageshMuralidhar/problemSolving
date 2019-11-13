var duplicate = (arr) => {
    len = arr.length;
    print_len = len;
    for (let i = 0; i < len; i++) {
        arr[print_len++] = arr[i]
    }
    console.log(arr)

}

let arr = [1, 2, 3, 4, 5];
duplicate(arr); // [1,2,3,4,5,1,2,3,4,5]