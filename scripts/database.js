const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "Angel Fish",
            location: "Delaware",
            image: "imageURL"
        },
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "Angel Fish",
            location: "Delaware",
            image: "imageURL"
        },
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "Angel Fish",
            location: "Delaware",
            image: "imageURL"
        },
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "Angel Fish",
            location: "Delaware",
            image: "imageURL"
        },
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "Angel Fish",
            location: "Delaware",
            image: "imageURL"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}