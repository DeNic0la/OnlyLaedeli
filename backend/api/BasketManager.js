export class BasketManager{

    constructor() {
        this.basketlist = [];
    }

    addOrUpdateBasket(context, basket){
        context.state.session.set("basket",basket);
    }

    async getBasket(context) {
        if (await context.state.session.has("basket")){
            return await context.state.session.get("basket");
        } else {
            return {};
        }
    }

}