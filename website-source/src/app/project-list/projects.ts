export interface Project{
    name: string;
    description: string;
    repo: string;
}

export const projects = [
    {
        name: 'Oregon Solitaire',
        description: 'A solitaire card game about making poker hands and trying for the best score. I happen to like it as a solitaire game, and I coulldn\'t any other digital implementations.',
        repo: 'https://github.com/jessehwoods/OregonSolitaire.git'
    },
    {
        name: 'Mazes',
        description: 'A program for algorithmically generating mazes. I\'ve completed the binary maze generator as of writing this.',
        repo: 'https://github.com/jessehwoods/Mazes.git'
    },
    {
        name: 'Traveller Character Generator',
        description: 'This is a character generator for an old game called Traveller. The readme has some details on what Traveller is, if you\'re curious.',
        repo: 'https://github.com/jessehwoods/ClassicTravellerCharacterGenerator.git'
    }
]