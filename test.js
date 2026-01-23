function calculateCartTotal (items, discountCode = null) {
    // 1. Hitung subtotal
    let subtotal = 0
    for (let item of items) {
        subtotal += item.price * item.quantity
    }

    // 2. Apply discount kalau ada
    let discount = 0
    const discountCodes = {
    SAVE10: 0.1, //10% OFF
    SAVE20: 0.2, //20% OFF
    }
    if (discountCode && discountCodes[discountCode]) {
    discount = subtotal * discountCodes[discountCode]
    }

    // 3. Hitung ongkir (gratis kalau > 100k)
    const shipping = subtotal < 100000 ? 15000 : 0

    // 4. Tottal
    return subtotal - discount + shipping
}

//Test
const cart = [
    {name: 'Laptop', price: 5000000, quantity: 1},
    {nam: 'Mouse', price: 150000, quantity: 2},
]
console.log(calculateCartTotal(cart, 'SAVE10')) //4770000