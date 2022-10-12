export interface Project{
    name: string;
    description: string;
    repo: string;
}

export const projects = [
    {
        name: 'Oregon Solitaire',
        description: 'A solitaire card game about making poker hands and trying for the best score. I made this project because I wanted to create a simple front-end for a desktop app, I wanted to deal with randomization in a program, and I really like the game Oregon. I wrote it in Visual Studio 2022 with C# for the back end and Windows Forms for the GUI.',
        repo: 'https://github.com/jessehwoods/OregonSolitaire.git'
    }
]