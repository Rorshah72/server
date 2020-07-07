class Ingredient {
    name;
    price;
    id;
    indexPhoto;

    constructor(name , price , id, ) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.indexPhoto = "111111111";
    }

        getName() {
        return this.name;
    }
        setName(name) {
        this.name = name;
    }
        setId(id) {
        this.id = id;
    }
        getId() {
        return this.id;

    }
        setPrice(price) {
        this.price = price;
    }
        getPrice() {
        return this.price;
    }
        setIndexPhoto(indexPhoto) {
        this.indexPhoto = indexPhoto;
    }
        getIndexPhoto() {
        return this.indexPhoto;
    }



}
module.exports = Ingredient;
