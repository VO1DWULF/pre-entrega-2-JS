let age = prompt("Bienvenido/a a Okami Manga Store, ¿Es usted mayor de 18 años de edad?").toLowerCase()

while (age !== "si" && age !== "no") {
    alert("Por favor ingrese si o no")
    age = prompt("Bienvenido/a a Okami Manga Store, ¿Es usted mayor de 18 años de edad?").toLowerCase()
}

if (age === "si") {
    age = 18;
    alert("A continuación tendrá acceso al catálogo completo de la tienda.")
} else {
    age = 14;
    alert("Nuestra selección de Manga ha sido filtrada acorde a su edad, se necesita ser mayor de 18 años para acceder al catálogo completo.")
}

let mainMessage = "Okami Manga Store\n1 - Encuentra tu Manga\n2 - Listado de Manga\n3 - Ver Carrito\n4 - Total a pagar + IVA\n5 - Finalizar compra\n6 - Salir"
let mangaList = [
    {
        id: 1,
        name: "One Piece",
        price: 10,
        age: 14
    },
    {
        id: 2,
        name: "Naruto",
        price: 12,
        age: 14
    },
    {
        id: 3,
        name: "Dragon Ball",
        price: 11,
        age: 14
    },
    {
        id: 4,
        name: "Bleach",
        price: 14,
        age: 14
    },
    {
        id: 5,
        name: "Attack on Titan",
        price: 18,
        age: 18
    },
    {
        id: 6,
        name: "Death Note",
        price: 15,
        age: 18
    },
    {
        id: 7,
        name: "Fullmetal Alchemist",
        price: 13,
        age: 14
    },
    {
        id: 8,
        name: "My Hero Academia",
        price: 16,
        age: 14
    },
    {
        id: 9,
        name: "Demon Slayer",
        price: 17,
        age: 14
    }
]


let cart = []

let total = 0
do {
    menu = menuReq(mainMessage)
    switch (menu) {
        case 1:
            let filteredList = mangaList.filter(item => item.age <= age)
            let searchQuery = prompt("Ingrese el título del manga que está buscando:").toLowerCase()
            if (searchQuery) {
                filteredList = filteredList.filter(item => item.name.toLowerCase().includes(searchQuery))
            }
            let itemMessage = ""
            filteredList.forEach(item => {
                itemMessage += `${item.id} - ${item.name} $${item.price} USD\n`
            })
            let product = menuReq(itemMessage)
            let selectedItem = mangaList.find(item => item.id === product)
            if (selectedItem) {
                if (age == 18 && selectedItem.age == 18) {
                    cart.push(selectedItem);
                    total += selectedItem.price;
                    alert(`El artículo ${selectedItem.name} ha sido agregado al carrito.`);
                    console.log(`Valor Neto $${total} USD`);

                } else {
                    alert(`No puede agregar ${selectedItem.name} a su carrito ya que es para mayores de 18 años.`);
                }
            } else {
                alert("Por favor elija una categoría disponible");
            }
            break
        case 2:
            case 2:
                let allItemsMessage = ""
                mangaList.forEach(item => {
                    if (age >= 18 || item.age < 18) {
                        allItemsMessage += `${item.id} - ${item.name} $${item.price} USD\n`
                    }
                })
                alert(allItemsMessage)
                break
            
        case 3:
            if (cart.length > 0) {
                console.log("Artículos en el carrito:")
                cart.forEach(item => {
                    console.log(`${item.name} $${item.price} USD`)
                })
                alert(`El total neto de su pedido es: $${total} USD`)
            } else {
                alert("El carrito está vacío.")
            }
            break
        case 4:
            const iva = ((total * 0.2) + total)
            if (cart.length > 0) {
                console.log("Artículos en el carrito:")
                cart.forEach(item => {
                    console.log(`${item.name} $${item.price} USD`)
                })
                alert(`El valor total de su pedido a pagar es: $${iva} USD`)
                console.log(`Valor Neto + IVA $${iva} USD`)
            } else {
                alert("El carrito está vacío.")
            }
            break
        case 5:
            alert("Gracias por su compra!")
            break
        case 6:
            alert("Vuelva pronto!")
            break
        case 0:
            break
        default:
            alert("Ingrese una categoría correcta")
            break
    }
}
while (menu !== 0 && menu !== 5)
function menuReq(message) {
    return Number(prompt(message))
}