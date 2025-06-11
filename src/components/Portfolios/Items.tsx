type PortfolioItem = {
  id: number;
  images?: string[] | null;
  video?: string | null;
  title: string;
  year?: string | null;
  stacks?: string[] | null;
  description?: string | null;
  github?: string | null;
  anysite?: string[] | null;
  linkedin?: string | null;
};

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        images: ['/img/unity-pc/unity1.gif', '/img/unity-pc/unity2.gif', '/img/unity-pc/unity3.gif'],
        video : 'https://drive.google.com/file/d/16uBaB9Ae9lCogjNYKO6e2kec2xU52hmZ/preview',
        title: 'PC Assembly simulator',
        year: '2022',
        stacks: ['C#', 'Unity', 'Blender'],
        description: 'An educational application for learning how to build a computer from scratch, developed as a final graduation project.',
        github: 'https://github.com/hode69/unity-TA',
        // anysite: [''],
        // linkedin: '',
    },
    {
        id: 2,
        images: ['/img/yayasan-taman/yys-tmn.png'],
        // video : 'https://drive.google.com/file/d/16uBaB9Ae9lCogjNYKO6e2kec2xU52hmZ/preview',
        title: 'Website Demo',
        year: '2023',
        stacks: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
        description: 'A small project for website demonstration for learning purposes.',
        github: 'https://github.com/hode69/ProjekYayasanTaman',
        anysite: ['https://yayasan-taman.vercel.app/'],
        // linkedin: '',
    },
    {
        id: 3,
        images: ['/img/crab-studio/crb-std.png'],
        // video : 'https://drive.google.com/file/d/16uBaB9Ae9lCogjNYKO6e2kec2xU52hmZ/preview',
        title: 'Crab Studio Bali',
        year: '2025',
        stacks: ['React', 'Javascript', 'Tailwind'],
        description: 'A website built for Crab Studio Bali company profile, and first time I learned about SEO optimization.',
        // github: 'https://github.com/hode69/ProjekYayasanTaman',
        anysite: ['https://crabstudiobali.com/'],
        // linkedin: '',
    },
   
];