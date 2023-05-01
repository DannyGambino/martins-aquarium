const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "Angel Fish",
            location: "Delaware",
            image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTQ26K3u5g82AV65yL7Mboufj0fnORikE4V3j08AcAxguy_yMhYeO-OcggK4QgBdEJDeVtW3NaQYQdbblg"
        },
        {
            name: "Clay",
            food: "algae",
            length: 12,
            species: "Walleye",
            location: "New Jersey",
            image: "https://guidesly.com/static/6842d15cca303db6a59a6fc445d54572/4576d/Walleye_ID%25401600x_896e6fe6a6.png"
        },
        {
            name: "Dale",
            food: "seaweed",
            length: 9,
            species: "Large Mouth Bass",
            location: "Wisconsin",
            image: "https://static1.squarespace.com/static/57865f85c534a5ef75ff2295/57868ba0e6f2e1a75beeca50/630fb06d902046695e24a3dd/1661972591125/?format=1500w"
        },
        {
            name: "Eddie",
            food: "shrimp",
            length: 15,
            species: "Pike",
            location: "Great Britain",
            image: "https://pikecaster.com/wp-content/uploads/2018/07/shutterstock-128657603.jpg"
        },
        {
            name: "Frank",
            food: "Barnacles",
            length: 5,
            species: "BLuegill",
            location: "Colorado",
            image: "https://bloximages.chicago2.vip.townnews.com/kokomotribune.com/content/tncms/assets/v3/editorial/9/a8/9a877f46-7dfc-11e7-bbaa-73d25fd7894e/598caad3adae3.image.jpg?crop=800%2C420%2C0%2C14&resize=800%2C420&order=crop%2Cresize"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}