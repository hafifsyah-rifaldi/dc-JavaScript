//* Konsep yang dilakukan
// 1. Memisahkan fungsi-fungsi umum yang biasa digunakan.
const yourGenericAction = params => ({
    actionA: () => {/** do action A **/},
    actionB: () => {/** do action B **/}

});
//2. Membuat Class seperti biasa
const YourClassName = (paramA, paramB) => {
    //3. Menyimpan attribut
    const self = {
        paramA,
        paramB
    };
    //4. Menambah perilaku method/function
    const yourSpecificActions = self => ({
        spesificActionA: { /** do action A */}
    });

    //5. Membuat kumpulan attribute, generic method, dan spesific method menjadi satu objek.
    return Object.assign(self, yourGenericAction(self), yourSpecificActions(self))
}



//*Hirarki Mail dari sebelumnya, contoh membuatnya dengan pendekatan Object composition
// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log(`send message:`,self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log(`valid phone`, self.from)

});

// [2] create object composition
const personalEnterprise = (from, message, store) => {
    // [3] attributes
    const self = {
        from,
        message,
        store
    };
    // [4] method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log(`Catalog has created: `, self.store)
    });

    // [5] create object composition
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};
const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih