function movies(){
    this.Movies = [` The Shawshank Redemption`,
        ` The Godfather`,
        ` The Godfather: Part II`,
        ` Pulp Fiction`,
        ` The Good, the Bad and the Ugly`,
        ` 12 Angry Men`,
        ` Schindler’s List`,
        ` The Dark Knight`,
        ` The Lord of the Rings: The Return of the King`,
        ` Fight Club`,
        ` Star Wars: Episode V - The Empire Strikes Back`,
        ` One Flew Over the Cuckoo’s Nest`,
        ` The Lord of the Rings: The Fellowship of the Ring`,
        ` Inception`,
        ` Goodfellas`,
        ` Star Wars`,
        ` Seven Samurai`,
        ` The Matrix`,
        ` Forrest Gump`,
        ` City of God`]
    this.checkout = checkout 
    this.rentalList = []     
}
function checkout(movie){
    this.rentalList.push(this.Movies[movie])
    this.Movies.splice(movie,1)
}
var List = new movies()
for (let i = 0 ; i < List.Movies.length;i++){
    console.log(`${i+1} . ${List.Movies[i]}`)
}
var select = parseInt(prompt('Select The Movie By Its Number')) - 1
console.clear()
List.checkout(select)
for (let j = 0 ; j < List.Movies.length;j++){
    var Check = prompt("Do You Want To Checkout More Movies")
    var Check = Check.toLowerCase()
    if (Check == 'no'){
        break
    }
    else {
        for (let i = 0 ; i < List.Movies.length;i++){
            console.log(`${i+1} . ${List.Movies[i]}`)
        }
        var Select = parseInt(prompt('Select The Movies By Its Number')) - 1
        console.clear()
        List.checkout(Select)
    }
}
for (let i = 0 ; i < List.Movies.length;i++){
    console.log(`${i+1} . ${List.Movies[i]}`)
}
var Rent = prompt("Do You Want To See  Movies You Already Seen")
var Rent = Rent.toLowerCase()
if (Rent == 'yes'){
    console.clear()
    console.log("The List Of Seen Movies")
    for (let i = 0 ; i < List.rentalList.length;i++){
        console.log(`${i+1}. ${List.rentalList[i]}`)
    }
}