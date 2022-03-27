import Cart from '../ts/Cart.ts';
import Movie from "../ts/Movie.ts";

test('cart empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
});

test('check add in cart', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1000, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller, adventure', '137 min'));
    expect(cart.items.length).toBe(2);
})

test('проверка расчета суммы товаров в корзине', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1000, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min'));
    const cartSum = cart.getSum();
    expect(cartSum).toBe(1200);
})

test('проверка расчета суммы товаров в корзине с учетом скидки', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1000, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min'));
    const sumWithDiscount = cart.getSumWithDiscount(10);
    expect(sumWithDiscount).toBe(1080);
})

test('проверка удаления товара из корзины по id', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1000, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min'));
    cart.deleteItem(1008);
    expect(cart.items.length).toBe(1);
})

test('проверка удаления товара из корзины по несуществующему id', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1000, 'The Avengers', 300, 2012, 'USA', 'Avengers Assemble!', 'fantastic, thriller', '137 min'));
    expect(() => {
        cart.deleteItem(1001);
    }).toThrow();
})