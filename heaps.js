(arr => {
    const output = []
    const swapInPlace = (arrToSwap, ia, ib) => {
        const temp = arrToSwap[ia]
        arrToSwap[ia] = arrToSwap[ib]
        arrToSwap[ib] = temp
    }

    const generate = (n, heapArr) => {
        if (n === 1) return output.push([...heapArr])

        generate(n-1, heapArr)

        for(let i = 0; i < n - 1; i++) {
            const frontOrBack = n % 2 === 0 ? i : 0
            swapInPlace(heapArr, frontOrBack, n - 1)
            generate(n-1, heapArr)
        }
    }

    generate(arr.length, [...arr])
    console.log(output)
    return output
})(JSON.parse(process.argv[2]))
