function getRamdomNumber(start=0, end=10, integer) //numero inicial, final e se é inteiro ou não
{
    let r = Math.random() * (start - end + 1) + start
    return integer ? parseInt(r) : r
}

console.log(getRamdomNumber(0, 10))