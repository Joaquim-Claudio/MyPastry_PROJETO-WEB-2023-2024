function translateCategory(category) {
    switch(category) {
        case 'pastel': return 'Pastéis';
            break;
        case 'hamburger': return 'Hambúrgueres';
            break;
        case 'complement': return 'Acompanhamentos';
            break;
        case 'beverage': return 'Bebidas';
            break;
        case 'dessert': return 'Sobremesas';
            break;
        case 'delicacy': return 'Iguarias brasileiras';
            break;
        default: return 'Desconhecidos';
            break;
    }
}

const PriceFormat = new Intl.NumberFormat('pt', { minimumFractionDigits:2, maximumFractionDigits:2 });
const TimeFormat = new Intl.NumberFormat('pt', { minimumIntegerDigits:2 , maximumFractionDigits:0 });

export {translateCategory, PriceFormat, TimeFormat};