import Work1 from "../../assets/work1.jpg";
import Site from "../../assets/site.png";
import Taquin from "../../assets/taquin.png";
import Classic from "../../assets/classic.png";

export const projectsData= [
    {
        id:1,
        image: Site,
        title: 'My site',
        category: 'web',
        link:'https://github.com/Matsuel/Personnal-website.git',
    },
    {
        id:2,
        image: "",
        title: 'Battle card games',
        category: 'python',
        link:'https://github.com/Matsuel/Jeux-de-Bataille-POO-Python.git',
    },
    {
        id:3,
        image: Taquin,
        title: 'Puzzle',
        category: 'python',
        link:'https://github.com/Matsuel/Taquin-Python.git',
    },
    {
        id:4,
        image: Classic,
        title: 'Classic-Hangman',
        category: 'golang',
        link:'https://github.com/Matsuel/hangman-classic.git',
    },
];

export const projectsNav= [
    {
        name:'all',
    },
    {
        name:'web',
    },
    {
        name:'python',
    },
    {
        name:'golang',
    },
];