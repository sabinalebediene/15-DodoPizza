const pizzaData = {
    selector: '#pizza',
    imgPath: './img/Picos/',
    title: 'Picos',
    singleImg: [
        {
            image: 'Pica1.jpg',
            imagealt:'first image',
            title: 'Christmas Pizza',
            subtitle: 'Kalakutiena, spanguolių padažas, bruknės, šoninė, raudonieji svogūnai, mocarelos sūris, česnakinis padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica2.jpeg',
            imagealt:'second image',
            title: 'Carbonara',
            subtitle: 'Sūrio padažas, granuliuoti česnakai, mocarelos sūris, raudonieji svogūnai, šoninė, vyšniniai pomidorai, itališkos žolelės, parmezanas, čederio sūris',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica3.jpeg',
            imagealt:'third image',
            title: 'Pesto',
            subtitle: 'Vištiena, fetos sūris, vyšniniai pomidorai, mocarelos sūris, padažas pesto, česnakinis padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica3.jpg',
            imagealt:'third image',
            title: 'Half&Half',
            subtitle: '',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica4.jpeg',
            imagealt:'fifth image',
            title: 'Half&Fiesta',
            subtitle: 'Vištiena, mocarelos sūris, raudonieji svogūnai, saliamis, pomidorai, žalioji paprika, česnakinis padažas, chipotle padažas, granuliuoti česnakai',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica5.jpeg',
            imagealt:'sixth image',
            title: 'Cheesy Chicken',
            subtitle: 'Pomidorai, mocarelos sūris, vištiena, sūrio padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica6.jpg',
            imagealt:'seventh image',
            title: 'Crazy',
            subtitle: 'Saldžiarūgštis padažas, vištiena, mocarelos sūris, saliamis, picų padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica7.jpeg',
            imagealt:'8 image',
            title: 'Royal',
            subtitle: 'Pievagrybiai, čili padažas, picų padažas, raudonieji svogūnai, vištiena, jautiena, kumpis, mocarelos sūris',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica8.jpg',
            imagealt:'9 image',
            title: '4 seasons',
            subtitle: 'Pievagrybiai, pomidorai, mocarelos sūris, kumpis, saliamis, picų padažas, fetos sūris, itališkos žolelės',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica9.jpeg',
            imagealt:'10 image',
            title: 'Dodo',
            subtitle: 'Pievagrybiai, pomidorai, mocarelos sūris, kumpis, saliamis, žalioji paprika, picų padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica10.jpeg',
            imagealt:'11 image',
            title: 'Chicken BBQ',
            subtitle: 'Mocarelos sūris, šoninė, vištiena, raudonieji svogūnai, picų padažas, bbq padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica11.jpg',
            imagealt:'12 image',
            title: 'Mexican',
            subtitle: 'Pievagrybiai, picų padažas, jalapeno griežinėliai, žalioji paprika, vištiena, saliamis, mocarelos sūris, pomidorai',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica12.jpg',
            imagealt:'13 image',
            title: 'Pepperoni',
            subtitle: 'Picų padažas, mocarelos sūris, saliamis',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica13.jpeg',
            imagealt:'14 image',
            title: 'Champion',
            subtitle: 'Pievagrybiai, mocarelos sūris, kumpis, picų padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica14.jpg',
            imagealt:'15 image',
            title: 'Ranch',
            subtitle: 'Česnakinis padažas, pomidorai, mocarelos sūris, kumpis, vištiena, granuliuoti česnaka',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica15.jpg',
            imagealt:'16 image',
            title: 'Cheeseburger',
            subtitle: 'Mocarelos sūris, pomidorai, šoninė, jautiena, raudonieji svogūnai, marinuoti agurkai, picų padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica16.jpg',
            imagealt:'17 image',
            title: 'Hawaiian',
            subtitle: 'Picų padažas, ananasai, mocarelos sūris, kumpis',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica17.jpg',
            imagealt:'18 image',
            title: 'Spicy',
            subtitle: 'Mocarelos sūris, čili padažas, jalapeno griežinėliai, saliamis, picų padažas, medžiotojų dešrelės',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica18.jpeg',
            imagealt:'19 image',
            title: 'Margherita',
            subtitle: 'Picų padažas, mocarelos sūris, pomidorai, itališkos žolelės',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica19.jpg',
            imagealt:'20 image',
            title: 'Seafood',
            subtitle: 'Mocarelos sūris, šoninė, vištiena, krevetės, picų padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica20.jpg',
            imagealt:'21 image',
            title: 'The Meats',
            subtitle: 'Medžiotojų dešrelės, mocarelos sūris, šoninė, kumpis, jautiena, picų padažas',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica21.jpg',
            imagealt:'22 image',
            title: 'Vegetarian',
            subtitle: 'Pievagrybiai, fetos sūris, picų padažas, marinuoti agurkai, juodosios alyvuogės, žalioji paprika, raudonieji svogūnai, mocarelos sūris, pomidorai, itališkos žolelės',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica22.jpg',
            imagealt:'23 image',
            title: 'Cheese',
            subtitle: 'Mocarelos sūris, picų padažas, fetos suгis, itališkos žolelės',
            price: 'nuo 8,75 €',
            active: true
        },
        {
            image: 'Pica22.jpg',
            imagealt:'23 image',
            title: 'Picos pyragas',
            subtitle: 'Bruknės, ananasai, sutirštintas pienas',
            price: 'nuo 8,75 €',
            active: true
        },
    ],
}

export { pizzaData };