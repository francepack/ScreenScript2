// ***Sample data***

// Data is broken into gamesets, allowing multiple 
// groups to access their games on this platform.
// You create custom script categories for each game,
// allowing for groupings of related script pieces.
// Each category has multiple script pieces, 
// and each of those script pieces has multiple texts,
// each text has one of 3 types, influencing its view.

var gameSets = [
  {
    name: "Awesome Games Inc",
    id: "a1",
    logo: "logo_url",
    background: "company_specific_img_url",
    games: [
      {
        name: "Diving Adventure",
        id: 'ag1',
        images: [
          {
            title: "pic_caption_here",
            id: "ag1i1",
            url: "pic_url_here"
          },
          {
            title: "pic_caption_here",
            id: "ag1i2",
            url: "pic_url_here"
          },
        ],
        script_categories: [
          {
            name: "Category title",
            id: "ag1c1",
            scripts: [
              {
                name: "Script name",
                id: "ag1c1s1",
                texts: [
                  {
                    textType: "main",
                    id: "ag1c1s1t1",
                    text: "group of text",
                    isChecked: false,
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Fire escape!",

      },
      {
        name: "Jungle survival",

      },
      {
        name: "Creepy Crawlies",

      },
      {
        name: "Spelunking",

      },
      {
        name: "Perilous Climbing",

      },
      {
        name: "River Run",

      },
      {
        name: "A walk gone wrong",

      },
      {
        name: "Disaster Production",

      },
    ]
  },
  {
    name: "Generic Company Games",
    logo: "logo_url",
    background: "company_specific_img_url",
    games: [
      {
        name: "Title 1",

      },
      {
        name: "Title 2",

      },
      {
        name: "Title 3",

      },
      {
        name: "Title 4",

      },
      {
        name: "Title 5",

      },
      {
        name: "Title 6",

      },
      {
        name: "Title 7",

      },
      {
        name: "Title 8",

      },
      {
        name: "Title 9",

      },
      {
        name: "Title 10",

      },
      {
        name: "Title 11",

      },
      {
        name: "Title 12",

      },
      {
        name: "Title 13",

      },
      {
        name: "Title 14",

      },
      {
        name: "Title 15",

      },
      {
        name: "Title 16",

      },
    ]
  },
  {
    name: "Mason's Wacky Adventures",
    logo: "logo_url",
    background: "company_specific_img_url",
    games: [
      {
        name: "Dungeon Crawl",

      },
      {
        name: "My cat's stuck in a tree- help!",

      },
      {
        name: "So you wanna be a pro wrestler?",

      },
      {
        name: "Home Alone X",

      },
      {
        name: "Where did my passport go?",

      },
      {
        name: "This breif case isn't mine, I swear!",

      },
      {
        name: "How did you get in?",

      },
      {
        name: "A walk gone wrong",

      },
      {
        name: "Disasterous Production",

      },
      {
        name: "Reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeally long word",

      },
      {
        name: "Edge case Edge case Edge case Edge case Edge case Edge case Edge case Edge case Edge case Edge case",

      },
      {
        name: "Why, just whyyyyyyyyyyyyyyyyyyyyyyyyy??????????yyyyyyyyyyyyyyyyyy?????????????? WHHHYYYYYYYYYYYYY!!!!!!!!!!!!!!!!!!!!",

      },
    ]
  },
];

export default gameSets;