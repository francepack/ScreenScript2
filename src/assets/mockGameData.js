// ***Sample Game data***

// You create custom script categories for each game,
// allowing for groupings of related script pieces.
// Each category has multiple script pieces,
// and each of those script pieces has multiple texts,
// each text has one of 3 types, influencing its view.

var mockGameData = [
  {
    name: "Diving Adventure",
    id: "aag1",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag1i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag1i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag1c1",
        scripts: [
          {
            name: "Script name",
            id: "aag1c1s1",
            texts: [
              {
                textType: "main",
                id: "aag1c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag1c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag1c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag1c2",
        scripts: [
          {
            name: "Script name",
            id: "aag1c2s1",
            texts: [
              {
                textType: "main",
                id: "aag1c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag1c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag1c1s2t3",
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
    id: "aag2",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag2i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag2i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag2c1",
        scripts: [
          {
            name: "Script name",
            id: "aag2c1s1",
            texts: [
              {
                textType: "main",
                id: "aag2c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag2c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag2c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag2c2",
        scripts: [
          {
            name: "Script name",
            id: "aag2c2s1",
            texts: [
              {
                textType: "main",
                id: "aag2c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag2c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag2c1s2t3",
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
    name: "Jungle survival",
    id: "aag3",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag3i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag3i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag3c1",
        scripts: [
          {
            name: "Script name",
            id: "aag3c1s1",
            texts: [
              {
                textType: "main",
                id: "aag3c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag3c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag3c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag3c2",
        scripts: [
          {
            name: "Script name",
            id: "aag3c2s1",
            texts: [
              {
                textType: "main",
                id: "aag3c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag3c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag3c1s2t3",
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
    name: "Creepy Crawlies",
    id: "aag1",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag1i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag1i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag4c1",
        scripts: [
          {
            name: "Script name",
            id: "aag4c1s1",
            texts: [
              {
                textType: "main",
                id: "aag4c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag4c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag4c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag4c2",
        scripts: [
          {
            name: "Script name",
            id: "aag4c2s1",
            texts: [
              {
                textType: "main",
                id: "aag4c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag4c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag4c1s2t3",
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
    name: "Spelunking",
    id: "aag5",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag5i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag5i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag5c1",
        scripts: [
          {
            name: "Script name",
            id: "aag5c1s1",
            texts: [
              {
                textType: "main",
                id: "aag5c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag5c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag5c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag5c2",
        scripts: [
          {
            name: "Script name",
            id: "aag5c2s1",
            texts: [
              {
                textType: "main",
                id: "aag5c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag5c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag5c1s2t3",
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
    name: "Perilous Climbing",
    id: "aag6",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag6i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag6i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag6c1",
        scripts: [
          {
            name: "Script name",
            id: "aag6c1s1",
            texts: [
              {
                textType: "main",
                id: "aag6c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag6c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag6c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag6c2",
        scripts: [
          {
            name: "Script name",
            id: "aag6c2s1",
            texts: [
              {
                textType: "main",
                id: "aag6c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag61c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag6c1s2t3",
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
    name: "River Run",
    id: "aag7",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag7i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag7i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag7c1",
        scripts: [
          {
            name: "Script name",
            id: "aag7c1s1",
            texts: [
              {
                textType: "main",
                id: "aag7c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag7c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag7c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag7c2",
        scripts: [
          {
            name: "Script name",
            id: "aag7c2s1",
            texts: [
              {
                textType: "main",
                id: "aag7c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag7c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag7c1s2t3",
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
    name: "A walk gone wrong",
    id: "aag8",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag8i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag8i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag8c1",
        scripts: [
          {
            name: "Script name",
            id: "aag8c1s1",
            texts: [
              {
                textType: "main",
                id: "aag8c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag8c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag8c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag8c2",
        scripts: [
          {
            name: "Script name",
            id: "aag8c2s1",
            texts: [
              {
                textType: "main",
                id: "aag8c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag8c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag8c1s2t3",
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
    name: "Disaster Production",
    id: "aag9",
    companyId: "aa",
    images: [
      {
        title: "pic_caption_here",
        id: "aag9i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "aag9i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "aag9c1",
        scripts: [
          {
            name: "Script name",
            id: "aag9c1s1",
            texts: [
              {
                textType: "main",
                id: "aag9c1s1t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag9c1s1t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag9c1s1t3",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
      {
        name: "Category title 2",
        id: "aag9c2",
        scripts: [
          {
            name: "Script name",
            id: "aag9c2s1",
            texts: [
              {
                textType: "main",
                id: "aag9c1s2t1",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "examine",
                id: "aag9c1s2t2",
                text: "group of text",
                isChecked: false,
              },
              {
                textType: "action",
                id: "aag9c1s2t3",
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
    name: "Title 1",
    id: "bbg1",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg1i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg1i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg1c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg1c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg1c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 2",
    id: "bbg2",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg2i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg2i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg2c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg2c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg2c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 3",
    id: "bbg3",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg3i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg3i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg3c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg3c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg3c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 4",
    id: "bbg4",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg4i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg4i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg4c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg4c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg4c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 5",
    id: "bbg5",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg5i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg5i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg5c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg5c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg5c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 6",
    id: "bbg6",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg6i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg6i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg6c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg6c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg6c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 7",
    id: "bbg7",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg7i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg7i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg7c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg7c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg7c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 8",
    id: "bbg8",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg8i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg8i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg8c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg8c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg8c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 9",
    id: "bbg9",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg9i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg9i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg9c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg9c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg9c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 10",
    id: "bbg10",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg10i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg10i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg10c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg10c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg10c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 11",
    id: "bbg11",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg11i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg11i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg11c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg11c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg11c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 12",
    id: "bbg12",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg12i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg12i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg12c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg12c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg12c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 13",
    id: "bbg13",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg13i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg13i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg13c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg13c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg13c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 14",
    id: "bbg14",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg14i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg14i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg14c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg14c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg14c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 15",
    id: "bbg15",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg15i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg15i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg15c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg15c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg15c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Title 16",
    id: "bbg16",
    companyId: "bb",
    images: [
      {
        title: "pic_caption_here",
        id: "bbg16i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "bbg16i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "bbg16c1",
        scripts: [
          {
            name: "Script name",
            id: "bbg16c1s1",
            texts: [
              {
                textType: "main",
                id: "bbg16c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Dungeon Crawl",
    id: 'ccg1',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg1i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg1i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg1c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg1c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg1c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "My cat's stuck in a tree- help!",
    id: 'ccg2',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg2i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg2i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg2c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg2c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg2c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "So you wanna be a pro wrestler?",
    id: 'ccg3',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg3i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg3i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg3c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg3c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg3c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Home Alone X",
    id: 'ccg4',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg4i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg4i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg4c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg4c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg4c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Where did my passport go?",
    id: 'ccg5',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg5i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg5i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg5c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg5c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg5c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "This breif case isn't mine, I swear!",
    id: 'ccg6',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg6i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg6i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg6c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg6c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg6c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "How did you get in?",
    id: 'ccg7',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg7i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg7i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg7c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg7c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg7c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "A walk gone wrong",
    id: 'ccg8',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg8i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg8i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg8c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg8c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg8c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Disasterous Production",
    id: 'ccg9',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg9i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg9i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg9c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg9c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg9c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeally long word",
    id: 'ccg10',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg10i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg10i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg10c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg10c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg10c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Edge case Edge case Edge case Edge case Edge case Edge case Edge case Edge case Edge case Edge case",
    id: 'ccg11',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg11i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg11i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg11c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg11c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg11c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Why, just whyyyyyyyyyyyyyyyyyyyyyyyyy??????????yyyyyyyyyyyyyyyyyy?????????????? WHHHYYYYYYYYYYYYY!!!!!!!!!!!!!!!!!!!!",
    id: 'ccg12',
    companyId: "cc",
    images: [
      {
        title: "pic_caption_here",
        id: "ccg12i1",
        url: "pic_url_here"
      },
      {
        title: "pic_caption_here",
        id: "ccg12i2",
        url: "pic_url_here"
      },
    ],
    script_categories: [
      {
        name: "Category title 1",
        id: "ccg12c1",
        scripts: [
          {
            name: "Script name",
            id: "ccg12c1s1",
            texts: [
              {
                textType: "main",
                id: "ccg12c1s1t1",
                text: "group of text",
                isChecked: false,
              },
            ]
          }
        ]
      },
    ]
  },
];

export default mockGameData;
