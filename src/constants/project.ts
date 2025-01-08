interface project {
  id: number
  Img: string
  Title: string
  Description: string
  Link: string
  TechStack: string[]
  Github: string
  Features: string[]
}

export const PROJECT_LIST: project[] = [
  {
    id: 1,
    Img: "/daily_coding_challenges.webp",
    Title: "Daily Coding Challenges",
    Description: "Each day a bit of algorithm. The project’s goals include improving algorithmic problem-solving skills and keeping a record of solutions for each challenge.",
    Link: "https://github.com/NguyenVanViet2004/daily-coding-challenges",
    TechStack: [
      'swift',
      'typescript',
      'nodejs',
      'eslint',
      'jest-testing'
    ],
    Github: "https://github.com/NguyenVanViet2004/daily-coding-challenges",
    Features: [
      "Organized Problem Solving: Each challenge is stored in its own directory with clearly labeled solution files (e.g., .ts files) and test cases",
      "Incremental Progress: The project allows users to work on one challenge per day, providing a clear daily progression of solving algorithmic problems.",
      "Automated Testing: The test files for each challenge help verify the correctness of the solutions, ensuring that they pass expected test cases.",
      "Clear Documentation: The project includes a README.md file, which typically explains how to set up and use the project, providing additional context about how users can contribute or follow along with the challenges.",
      "Variety of Problems: The problems range from simple algorithms (like 'Two Sum') to more complex scenarios, fostering gradual improvement in coding skills."
    ],
  },
  {
    id: 2,
    Img: "/baby_shark_games.png",
    Title: "Baby Shark's games",
    Description:
      "The Baby Shark's Games project is a mobile gaming application developed using React Native, featuring a collection of simple and fun games such as Tic Tac Toe, Minesweeper, and more. The goal of the project is to provide an entertainment platform where users can relax and enjoy popular and easy-to-play games, offering a user-friendly and accessible interface.",
    Link: "https://github.com/NguyenVanViet2004/Baby-Shark-s-Games",
    TechStack: [
      'Typescript',
      'React Native',
    ],
    Github: "https://github.com/NguyenVanViet2004/Baby-Shark-s-Games",
    Features: [
      "Tic Tac Toe: The classic game that allows players to compete against each other (Player vs Player) is coming soon or against the computer (Player vs Computer).",
      "Minesweeper: A puzzle game where players need to uncover squares without hitting bombs.",
      "Simple and User-friendly Interface: Clear screens that allow players to easily access different games."
    ]
  },
].reverse()
