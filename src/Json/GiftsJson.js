import image1 from '../Images/Gifts/personalised-3D-crystal-photo-portrait.jpg';
import image2 from "../Images/Gifts/You-and-me-forever-personalized-table-clock-round.jpg";
import image3 from "../Images/Gifts/WoodEngraving-1.jpg";
import image4 from "../Images/Gifts/personalized stone plaques heart.jpg";
import image5 from "../Images/Gifts/Photo print on mug – photo mug online.jpg";
import image6 from "../Images/Gifts/magic-pillow-red-color-heart-shape.jpg";
import image7 from "../Images/Gifts/Customized-Pillows-Pink-Square.jpg";
import image8 from "../Images/Gifts/Guy-In-A-Harley-Bike-–-Personalized-Caricature-Gifts.jpg";
import image9 from "../Images/Gifts/Super-Woman-Caricature-–-Personalized-Caricature-Gift-for-Girl.jpg"
import image10 from "../Images/Gifts/Single Full Body miniature.webp";
import image11 from "../Images/Gifts/Couple Full Body.webp";
import image12 from "../Images/Gifts/Single Half Bust.webp";
import image13 from "../Images/Gifts/happy-birthday-tabletop-photo-frame-9909807gf-B.jpg";
import image14 from "../Images/Gifts/wooden-photo-frame-ven-05-atrmr133-A_0.avif";
import image15 from "../Images/Gifts/lovebirds-anniversary-table-showpiece-9869737gf-A_0.avif";
import image16 from "../Images/Gifts/custom-love-mug-hamper-9862717gf-A_1.avif";
import image17 from "../Images/Gifts/blazing-love-led-cushion-9856997gf-B_0.avif";
import image18 from "../Images/Gifts/hearty-anniversary-photo-frame-9829297gf-A_0.avif";
import image19 from "../Images/Gifts/personalised-kid-jigsaw-9948327gf-A.avif";
import image20 from "../Images/Gifts/birthday-glass-frame-9853047gf-A_0.avif";
import image21 from "../Images/Gifts/hearts-in-love-photo-frame-9863507gf-D_0.avif";
import image22 from "../Images/Gifts/personalised-bottle-lamp-9942417gf-A.avif";
import image23 from "../Images/Gifts/custom-all-in-one-product-ven-zvl-zv056-A_0.avif";
import image24 from "../Images/Gifts/personalised-b-day-led-photo-fame-ven-05-atrmr324-A_0.avif";


let gifts = [
    {
        id: 1,
        img: image1,
        name: "3D crystals portrait to your soul mate",
        description : "Send this 3D crystals portrait to your soul mate and make him/ her feel special.",
        price: 650
    },
    {
        id: 2,
        img: image2,
        name: "You and me forever personalized table clock round",
        description : "You and me forever – personalized round table clock for your loved ones – wishing you a beautiful day and many more moments to chersish.",
        price: 390
    },
    {
        id: 3,
        img: image3 ,
        name: "wood engraving gift",
        description : "Unique and perfect wood engraving portrait gift for your loved ones.",
        price: 390
    },
    {
        id: 4,
        img: image4 ,
        name: "personalized stone plaques heart",
        description : "Express your love and affection for your special persons with these personalized stone plaques heart shape stones.",
        price: 899
    },
    {
        id: 5,
        img: image5,
        name: "Photo print on mug – photo mug online",
        description : "Express your love and affection for your special persons with this Photo printed mug.",
        price: 199
    },
    {
        id: 6,
        img: image6,
        name: "Magic pillow with photo – Red color heart",
        description : "Hide your image in this personalized sequin magic pillow with a photo heart shape red color. especially for couples.",
        price: 690
    },
    {
        id: 7,
        img: image7,
        name: "personalized pillows with pictures Pink",
        description : "customized pillow with picture A heartwarming customized pink color fur pillow to convey your love and joy to your dear ones.",
        price: 599
    },
    {
        id: 8,
        img: image8,
        name: "Guy In A Harley Bike – Personalized Caricature Gift",
        description : "Guy In A Harley Bike personalised caricature gifts. For personalization, please provide us front-facing closeup image.",
        price: 399
    },
    {
        id: 9,
        img:image9,
        name: "Super Woman Caricature – Personalized Caricature Gift for Girl",
        description : "“You are a woman; that is your superpower.” Treat that wonders with a glimpse of our Personalised Caricature, for personalization, please provide us front-facing closeup image.",
        price: 399
    },
    {
        id: 10,
        img:image10,
        name:"Personalized 3D Miniature- Single full body",
        description:"Get the 3D version of you, your family and friends with the unique custom clone dolls that preserves the memorable moments.",
        price:2600
    },
    {
        id: 11,
        img: image11,
        name:"Personalized 3D Miniature - Couple Full body",
        description:"Get the 3D version of you, your family and friends with the unique custom clone dolls that preserves the memorable moments.",
        price:4800
    },
    {
        id: 12,
        img: image12,
        name:"Personalized 3D Miniature - Single Half Bust",
        description:"Get the 3D version of you, your family and friends with the unique custom clone dolls that preserves the memorable moments.",
        price:3300
    },
    {
        id: 13,
        img: image13,
        name:"Happy Birthday Tabletop Photo Frame",
        description:"This product contains a Personalised Birthday Frame with dimensions of 9x5 inches",
        price:399
    },
    {
        id: 14,
        img: image14,
        name:"Wooden Photo Frame",
        description:"This product contains a Personalised Photo Frame with dimensions of 21x16 inches",
        price:549
    },
    {
        id: 15,
        img: image15,
        name:"Lovebirds Anniversary Desktop Photo Calendar",
        description:"This product contains a Desktop Photo Calendar with height of 11 inches",
        price:649
    },
    {
        id: 16,
        img: image16,
        name:"Custom Love Mug Hamper",
        description:"This product contains a Cadbury Temptation Rum and Raisin Chocolate 72gm,Set of 2 Personalised Coaster,One Photo Frame 4 Inches",
        price:1649
    },
    {
        id: 17,
        img: image17,
        name:"Blazing Love Led Cushion",
        description:"This product contains a One Personalised LED Cushion",
        price:549
    },
    {
        id: 18,
        img: image18,
        name:"Hearty Anniversary Photo Frame",
        description:"This product contains a Personalised Photo Frame with size of 8x5 inches",
        price:495
    },
    {
        id: 19,
        img: image19,
        name:"Personalised Kid Jigsaw",
        description:"This product contains a Personalised Puzzle with size of 7x10 inches",
        price:399
    },
    {
        id: 20,
        img: image20,
        name:"Birthday Glass Frame",
        description:"This product contains a Led Photo Frame with size of 6x6 inches",
        price:699
    },
    {
        id: 21,
        img: image21,
        name:"Hearts In Love Photo Frame",
        description:"This product contains a Rotating Heart Couple Photo Frame with size of 3x3 inches each",
        price:599
    },
    {
        id: 22,
        img: image22,
        name:"Personalised Bottle Lamp",
        description:"This product contains a 12 Inches Personalised Bottle Lamp",
        price:799
    },
    {
        id: 23,
        img: image23,
        name:"Custom All In One Product",
        description:"This product contains Photo Lamp/ Clock/ Speaker",
        price:3150
    },
    {
        id: 24,
        img: image24,
        name:"Personalised B Day LED Photo Fame",
        description:"This product contains Personalised Led Lamp with the size of 8x8 inches",
        price:599
    }
]
export default gifts;