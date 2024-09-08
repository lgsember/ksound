const artistsData = [
    { 
      id: 1,
      type: 'boysGroup',
      title: 'Boys Group',
      cards: [
        { id: 1, image: 'img/boygroup1.jpg', title: 'EXO', link: 'verArtista.html?id=1' },
        { id: 2, image: 'img/boygroup2.jpg', title: 'Tomorrow x Together', link: 'verArtista.html?id=2' },
        { id: 3, image: 'img/boygroup3.jpg', title: 'Enhypen', link: 'verArtista.html?id=3' }
      ]
    },
    {
      id: 2,
      type: 'girlsGroup',
      title: 'Girls Group',
      cards: [
        { id: 4, image: 'img/girlgroup1.jpg', title: 'BlackPink', link: 'verArtista.html?id=4' },
        { id: 5, image: 'img/girlgroup2.jpg', title: 'LE SSERAFIM', link: 'verArtista.html?id=5' },
        { id: 6, image: 'img/girlgroup3.jpg', title: 'NewJeans', link: 'verArtista.html?id=6' }
      ]
    },
    {
      id: 3,
      type: 'soloIdols',
      title: 'Solo Idols',
      cards: [
        { id: 7, image: 'img/soloidol1.jpg', title: 'JungKook', link: 'verArtista.html?id=7' },
        { id: 8, image: 'img/soloidol2.jpg', title: 'Jackson Wang', link: 'verArtista.html?id=8' },
        { id: 9, image: 'img/soloidol3.jpg', title: 'Uhm Jung Hwa', link: 'verArtista.html?id=9' }
      ]
    }
];


const artistsDetails = {
    1: {
        name: "EXO",
        description: "EXO é um grupo de K-pop formado pela SM Entertainment.",
        image: "https://i.pinimg.com/originals/95/f0/df/95f0dfc0c527fb1cada46d7508572d63.jpg",
        members: [
            { name: "Suho", photo: "https://i.pinimg.com/736x/65/27/c3/6527c3325fe671196f7693de067dee0d.jpg", link: "#" },
            { name: "Kai", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MGWKllbObJvBI5XwJytVJwDy2IC6Iwy6Gg&s", link: "#" },
            { name: "Chen", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5AsLazy8NCaRhDoltAKxU_ZnWqozcJzo8w&s", link: "#" },
            { name: "D.O.", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZoaSvN5cYDUbeBJynZue7zcZITSuVqPmQg&s", link: "#" },
            { name: "Baekhyun", photo: "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/05/05/93e3ef18-8dd9-11ea-a674-527cfdef49ee_image_hires_105518.JPG", link: "#" },
            { name: "Sehun", photo: "https://i.pinimg.com/564x/0d/fa/2b/0dfa2be960ad040bbe98144e7b3a68c4.jpg", link: "#" },
            { name: "Chanyeol", photo: "https://i.pinimg.com/736x/82/c0/3e/82c03e8bff7ce4aa1c556e95903d3fb8.jpg", link: "#" },
            { name: "Xiumin", photo: "https://static.wikia.nocookie.net/kpop/images/2/24/Xiumin_INB100_profile_photo_1.png/revision/latest/scale-to-width-down/1200?cb=20240108052613", link: "#" }
        ],
        discography: [
            { title: "EXIST - The 7th Album", cover: "https://i.scdn.co/image/ab67616d0000b2737657059390a7871c158fd966", link: "https://open.spotify.com/intl-pt/album/4qMcBYh4ZlwDeb7vfgZO61" },
            { title: "Don't Fight the Feeling", cover: "https://i.scdn.co/image/ab67616d0000b273e70b87a4bd471f82768bdcb9", link: "https://open.spotify.com/intl-pt/album/7Jw48lPmYuYftfQv5LmAzI" },
            { title: "OBSESSION - The 6th Album", cover: "https://i.scdn.co/image/ab67616d0000b2732bda510d66361378f273f4ee", link: "https://open.spotify.com/intl-pt/album/7uNyF6MKaVHi5TJqIiNobm" }
        ],
        videography: [
            { title: "2023 EXO FANMEETING EXO’ CLOCK", thumbnail: "https://i.ytimg.com/vi/AVhuUMzA1B8/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB7N0QFoaL2kaZcl_uoWhR3Y_yIUw", link: "https://www.youtube.com/playlist?list=PLx2283ZEdByVT7_q26Pfo9N1yHMrAaeAw" },
            { title: "EXIST Promo Videos", thumbnail: "https://i.ytimg.com/vi/BMGqpXKOgu0/maxresdefault.jpg", link: "https://www.youtube.com/playlist?list=PLx2283ZEdByURgPAdKDS_2dEpYzfL6Lt0" },
            { title: "Chanyeol Black Out Promo", thumbnail: "https://i.ytimg.com/vi/j5FF18ko7LY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBsFTfNjP2LreF4JBOWDHHsoWy1ug", link: "https://www.youtube.com/playlist?list=PLx2283ZEdByWN8YKjVGbdrKKmz8jXNfIO" },
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/weareone.exo/?hl=en",
            amino: "https://aminoapps.com/c/exo/info/",
            spotify: "https://open.spotify.com/intl-pt/artist/3cjEqqelV9zb4BYE3qDQ4O/discography/all",  // Adicione o link do Spotify do artista
            youtube: "https://www.youtube.com/@weareoneEXO"
        }
    },
    2: {
        name: "Tomorrow x Together",
        description: "Tomorrow x Together é um grupo de K-pop da Big Hit Entertainment.",
        image: "https://i.imgur.com/HPb5aIL.jpeg",
        members: [
            { name: "Soobin", photo: "https://static.wikia.nocookie.net/txt/images/2/23/Soobin_Minisode_3_TOMORROW_-_Ethereal_Concept_Photo_%283%29.jpg/revision/latest/scale-to-width-down/1200?cb=20240319150352", link: "#" },
            { name: "Yeonjun", photo: "https://kpopofficial.com/wp-content/uploads/2023/01/25-Kpop-TXT-Members-YEONJUN-Profile.jpg", link: "#" },
            { name: "Taehyun", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3hFdui2z7XBfokOCG-ggGnKrUWkKG-ySB3Gh6whLz0-Ht_9AZ2CIchO2MTxdwfT8pzk&usqp=CAU", link: "#" },
            { name: "Beomgyu", photo: "https://w0.peakpx.com/wallpaper/111/528/HD-wallpaper-beomgyu-txt.jpg", link: "#" },
            { name: "Heuning Kai", photo: "https://64.media.tumblr.com/04fb22b0b75aae935a294370121eef4d/423c804a475cacff-ee/s1280x1920/0e820d406aad26e9a75b29568f242e76a65a630a.jpg", link: "#" }
        ],
        discography: [
            { title: "CHIKAI", cover: "https://acdn.mitiendanube.com/stores/987/955/products/s-l960-2-a097546ca4955576bd17178457580696-640-0.webp", link: "https://open.spotify.com/intl-pt/album/4gUSRC5pgmbbDi39dGBsuL" },
            { title: "minisode 3: TOMORROW", cover: "https://i.scdn.co/image/ab67616d0000b27303c996028737858321d2ffe0", link: "https://open.spotify.com/intl-pt/album/0mDwrOXZHN1lgCNeBvkBbj" },
            { title: "The Name Chapter: FREEFALL", cover: "https://i.scdn.co/image/ab67616d0000b2736067880e6c410727ac5a5f8b", link: "https://open.spotify.com/intl-pt/album/63fWdGyeBj8VDjvHSUROx3" }
        ],
        videography: [
            { title: "CHIKAI Promo Videos", thumbnail: "https://i.ytimg.com/vi/5vqIaVWFHlQ/maxresdefault.jpg", link: "https://www.youtube.com/playlist?list=PLcZxoPUYVQX3omUi5zIcPrBWGDMN6J4oZ" },
            { title: "ACT Promise", thumbnail: "https://aegwebprod.blob.core.windows.net/content/content_images/506/sxwLjjAZW3tMj3veJk3KUBVRwIsc2g6sHyta2MRv.jpg", link: "https://www.youtube.com/playlist?list=PLcZxoPUYVQX3RggrKkbrDr3biTpGllkv8" },
            { title: "We'll Never Change MV", thumbnail: "https://i.ytimg.com/vi/5BVC6VggY3A/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=5BVC6VggY3A" }
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/txt_bighit/?hl=en",
            amino: "https://aminoapps.com/c/oficialtxtaminoo/page/item/txt/53bX_5BS5ILzD2eMjL34MB76bnezjzpe7e",
            spotify: "https://open.spotify.com/intl-pt/artist/0ghlgldX5Dd6720Q3qFyQB/discography/all",
            youtube: "https://www.youtube.com/@TXT_bighit"
        }
    },
    3: {
        name: "Enhypen",
        description: "Um grupo masculino de K-pop formado pelo reality show I-LAND, conhecido por sua performance poderosa e conceito juvenil.",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0bedb362-1325-47fe-8fb8-8a1224de0221/deach5l-e4202805-7034-45a9-9982-e89d83ce349a.png/v1/fill/w_1280,h_427,q_80,strp/enhypen_twitter_header_by_sailortrekkie92_deach5l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvMGJlZGIzNjItMTMyNS00N2ZlLThmYjgtOGExMjI0ZGUwMjIxXC9kZWFjaDVsLWU0MjAyODA1LTcwMzQtNDVhOS05OTgyLWU4OWQ4M2NlMzQ5YS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EBmXIidudjFWkpSlhf5D9Q0IEeNqr05R81_8tshUH00",
        members: [
            { name: "SUNGHOON", photo: "https://upload.wikimedia.org/wikipedia/commons/5/53/240408_Park_Sung-hoon_%282%29.jpg", link: "#" },
            { name: "Heeseung", photo: "https://i.pinimg.com/736x/a0/29/d4/a029d4e06a3dd3a3b369f1f235e1bd23.jpg", link: "#" },
            { name: "Jake", photo: "https://img.wattpad.com/be59acf248c1b7fc6eeae35423c9e5cf02694926/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6171373042637579724e6e5958673d3d2d3330332e313633663138643138323561623266623434393930363230333135332e6a7067?s=fit&w=720&h=720", link: "#" },
            { name: "Jay", photo: "https://dbkpop.com/wp-content/uploads/2020/09/enhypen_official_profile_Jay_1.jpg", link: "#" },
            { name: "Sunoo", photo: "https://dbkpop.com/wp-content/uploads/2020/09/enhypen_official_profile_Sunoo_1.jpg", link: "#" },
            { name: "Jungwon", photo: "https://i0.wp.com/images.squarespace-cdn.com/content/v1/62886298592584625be0e1f6/9dcd2d68-0ec9-4089-9ac0-2018ec095c9a/IMG_2187.JPG?ssl=1", link: "#" },
            { name: "Ni-Ki", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIG74WIGdwt8c-JieCxxcmKkqE0cb-ryKiQ&s", link: "#" }
        ],
        discography: [
            { title: "ROMANCE: UNTOLD", cover: "https://i.scdn.co/image/ab67616d0000b273653887a83332de0350151f10", link: "https://open.spotify.com/intl-pt/album/05I8FltCMnGa3kE38mpOkL" },
            { title: "DARK MOON ESPECIAL ALBUM <MEMORABILIA>", cover: "https://i.scdn.co/image/ab67616d0000b27355a4b0d253296e5fe7516d45", link: "https://open.spotify.com/intl-pt/album/0OhJwEzXbK9Km6GQSPdmPU" },
            { title: "Sweet Venom (Seeb Remix)", cover: "https://i.scdn.co/image/ab67616d0000b273e4172e82cdee36758f23c9f3", link: "https://open.spotify.com/intl-pt/album/1VpLHUZOodpgXh69HNu4nC" }
        ],
        videography: [
            { title: "EN-DRAMA", thumbnail: "https://i.ytimg.com/vi/WyFqe1P6sSc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCwZdHyCmKPBmisb5TbPxCJqTA-8w", link: "https://www.youtube.com/playlist?list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8" },
            { title: "ROMANCE: UNTOLD Promo", thumbnail: "https://i.ytimg.com/vi/jgHsEm8-tZY/maxresdefault.jpg", link: "https://www.youtube.com/playlist?list=PLMQ4WMltba-HM2JiNgxPWgGvkdfNUAQ-r" },
            { title: "ORANGE BLOOD Promo", thumbnail: "https://i.ytimg.com/vi/KAvnD_qxhw0/maxresdefault.jpg", link: "https://www.youtube.com/playlist?list=PLMQ4WMltba-EHhqdm05GjzuDxM9XAZl01" }
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/enhypen/?hl=en",
            amino: "https://aminoapps.com/c/enhypenofficial/home/",
            spotify: "https://open.spotify.com/intl-pt/artist/5t5FqBwTcgKTaWmfEbwQY9/discography/all",
            youtube: "https://www.youtube.com/@ENHYPENOFFICIAL"
        }
    },
    4: {
        name: "BlackPink",
        description: "Um grupo feminino de K-pop globalmente famoso, reconhecido por seus hits e visuais marcantes, sendo pioneiras em popularizar o girl crush no K-pop.",
        image: "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/5691b634-eab8-42c0-8989-c8baaddef2d1.jpeg",
        members: [
            { name: "Jennie", photo: "https://cdn.selectgame.net/wp-content/uploads/2024/03/Jennie-com-belo-vestido-na-Paris-Fashion-Week-07.webp", link: "#" },
            { name: "Lisa", photo: "https://i.pinimg.com/originals/1a/8e/7c/1a8e7c59a9967bb28890d5b18f6189fc.jpg", link: "#" },
            { name: "Rosé", photo: "https://i.pinimg.com/564x/60/b5/a7/60b5a73f339eeee84e228bc9e038fba1.jpg", link: "#" },
            { name: "Jisoo", photo: "https://assets.teenvogue.com/photos/65e747615328122f45512978/master/w_1600%2Cc_limit/self-portrait_SS24%2520Campaign_Jisoo_%25C2%25A9self-portrait_Yoon%2520JiYong_01_PRESS%2520(Clean).jpg", link: "#" }
        ],
        discography: [
            { title: "The Girls", cover: "https://i.scdn.co/image/ab67616d0000b273a2ef2c1c668b6fdb1f346dd1", link: "https://open.spotify.com/intl-pt/album/01K5Mr0IkO7GQrvoUEsWfS" },
            { title: "BORN PINK", cover: "https://upload.wikimedia.org/wikipedia/pt/a/a1/Blackpink_-_Born_Pink.png", link: "https://open.spotify.com/intl-pt/album/7jaSNQUBJbvfbZHLNFrV7P" },
            { title: "Pink Venom", cover: "https://upload.wikimedia.org/wikipedia/pt/e/ed/Blackpink_-_Pink_Venom.jpg", link: "https://open.spotify.com/intl-pt/album/3dZBZnDa3z20uEVnxR38M1" }
        ],
        videography: [
            { title: "BORN PINK MEMORIES: B.P.M.", thumbnail: "https://i.ytimg.com/vi/3Ne55EliHKU/maxresdefault.jpg", link: "https://www.youtube.com/playlist?list=PLNF8K9Ddz0kIUWvF02B4dvUyOgGO9x87D" },
            { title: "BORN PINK Promo", thumbnail: "https://i.ytimg.com/vi/nxs0RHpT_Hg/maxresdefault.jpg", link: "https://www.youtube.com/playlist?list=PLNF8K9Ddz0kKuIYCH9b9epXgQBuOkACPN" },
            { title: "5th ANNIVERSARY [4+1]", thumbnail: "https://i.ytimg.com/vi/8k3QLN3WbwE/hqdefault.jpg", link: "https://www.youtube.com/playlist?list=PLNF8K9Ddz0kKZAbwpPPJxU2jpWqNToguE" }
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/blackpinkofficial/?hl=en",
            amino: "https://aminoapps.com/c/blackpinkaminobrasil/page/item/blackpink/1RPk_66HrI1qBXRZwPq1q22o0x1EBX8Vv0",
            spotify: "https://open.spotify.com/intl-pt/artist/41MozSoPIsD1dJM0CLPjZF/discography/all",
            youtube: "https://www.youtube.com/@BLACKPINK"
        }
    },
    5: {
        name: "LE SSERAFIM",
        description: "Um grupo feminino rookie da HYBE, com um conceito forte e autêntico, buscando quebrar estereótipos da indústria do K-pop.",
        image: "https://storage.googleapis.com/wordpress-kpopontrack-byspotify-com/1/2023/06/LE-SSERAFIM-Spotify-scaled-e1686125307662.jpg",
        members: [
            { name: "KAZUHA", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP-h9y2sqZg4I6ZA6AwHi-b-soKzbJqQoIw&s", link: "#" },
            { name: "Sakura", photo: "https://i.pinimg.com/736x/4e/d8/d5/4ed8d563237019baa26a83cf165373ca.jpg", link: "#" },
            { name: "Kim Chae-Won", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsG0KCXyscMY7ECC89cVD4s4t_i46PawMfg&s", link: "#" },
            { name: "Huh Yun-Jin", photo: "https://imgix.bustle.com/uploads/image/2023/8/18/a8f60118-9eb7-489a-a44f-f0c8d13e33b7-huh-yunjin-1_photo-credit-source-music-1.jpg?w=374&h=285&fit=crop&crop=faces&q=50&dpr=2", link: "#" },
            { name: "Hong Eun-Chae", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxy5epddzqPlxB8F5EwKqsOScnB__9tCCug&s", link: "#" },
            { name: "Kim Ga-Ram", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr42T01C8ABxm6IYHRdaWARtDGqFR7FEsO4g&s", link: "#" }
        ],
        discography: [
            { title: "CRAZY", cover: "https://images.genius.com/7674508f3a55e10d2f4bc3e88fa6b607.875x875x1.jpg", link: "https://open.spotify.com/intl-pt/album/538vEfAgLJ6g2I8ubuOlap" },
            { title: "Smart (Remixes)", cover: "https://i.scdn.co/image/ab67616d0000b273249dc66f0cb95bed7dacc39e", link: "https://open.spotify.com/intl-pt/album/4IqfdL14SOkeFN2c5ASmGh" },
            { title: "EASY (Remixes)", cover: "https://i.scdn.co/image/ab67616d0000b273361ccf8d7188a3c5101b98e9", link: "https://open.spotify.com/intl-pt/album/75rFaEWO9nufjSlTcg3wPS" }
        ],
        videography: [
            { title: "CRAZY Promo", thumbnail: "https://i.ytimg.com/vi/VckYCAbbYrE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASOnUlM_hmGzdiNdX6BzJH_K6LBA", link: "https://www.youtube.com/playlist?list=PLUnnlhhDy3eZSOpJW0Ign2_5lXJpElnqQ" },
            { title: "Make It Look Easy", thumbnail: "https://static.wikia.nocookie.net/le-sserafim/images/1/18/Make_It_Look_Easy.png/revision/latest/scale-to-width-down/1200?cb=20240731075414", link: "https://www.youtube.com/playlist?list=PLUnnlhhDy3eZ8TYTh7ZbagLBq4fO5WRz6" },
            { title: "EASY Promo", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJ-kCtwNkXUEraC0zzM4u_7tYVhl_Te2srohGTmBkY81bGKbFjOybB8PYKl0ITpyaRDA&usqp=CAU", link: "https://www.youtube.com/playlist?list=PLUnnlhhDy3eabTd8xHSi_Vqzo33JRBZyV" }
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/le_sserafim/?hl=en",
            amino: "https://aminoapps.com/c/kpoppt/page/item/le-sserafim/DjJm_wYhNIMoxnr3d4rlP31Nnmqb7g4rYJ",
            spotify: "https://open.spotify.com/intl-pt/artist/4SpbR6yFEvexJuaBpgAU5p/discography/all",
            youtube: "https://www.youtube.com/@LESSERAFIM_official"
        }
    },
    6: {
        name: "NewJeans",
        description: "Um grupo feminino novato que rapidamente ganhou popularidade por sua música fresca e conceito jovem, com um estilo único e memorável.",
        image: "https://cdn.shopify.com/s/files/1/0469/3927/5428/files/Banner_2fde236c-fbca-4387-ab96-b7b0a528dff9.png?v=1711539787",
        members: [
            { name: "Hanni", photo: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e6b53b36-23fb-4193-8966-0174ea0cc41a/width=450/00033-707345963.jpeg", link: "#" },
            { name: "Minji", photo: "https://go_service.aieasypic.com/?url=https%3A%2F%2Fimage.civitai.com%2FxG1nkqKTMzGDvpLrqFT7WA%2F55498a1c-53c6-4f09-8ca7-1ee6651a8a85%2Fwidth%3D600%2F753457.jpeg&type=jpeg&width=512&quality=80", link: "#" },
            { name: "Haerin", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrGtfBhTLAdDa5uZnVgIBWbpmYsJTmF8cKg&s", link: "#" },
            { name: "Hyein", photo: "https://www.allkpop.com/upload/2024/05/content/072237/1715135867-newjeans-hyein-01.jpg", link: "#" },
            { name: "Danielle", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU19U5i1r7OQwBI--Q9fzSM-Go74fLwSvBZg&s", link: "#" }
        ],
        discography: [
            { title: "Supernatural", cover: "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80", link: "https://open.spotify.com/intl-pt/album/1FVw30SoC91lq1UZ6N9rwN" },
            { title: "How Sweet", cover: "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2", link: "https://open.spotify.com/intl-pt/album/0EhZEM4RRz0yioTgucDhJq" },
            { title: "NJWMX", cover: "https://upload.wikimedia.org/wikipedia/en/4/45/NewJeans_-_NJWMX.png", link: "https://open.spotify.com/intl-pt/album/6XRGc3GNodkhSrPwHnx1KX" }
        ],
        videography: [
            { title: "Supernatural Promo", thumbnail: "https://i.ytimg.com/vi/ZncbtRo7RXs/maxresdefault.jpg", link: "https://www.youtube.com/playlist?list=PLNy-PdPlJT7EkoqzLdzpRbUVT6fDg4Jng" },
            { title: "How Sweet Promo", thumbnail: "https://recreio.com.br/media/uploads/2024/05/newjeans-how-sweet.jpg", link: "https://www.youtube.com/playlist?list=PLNy-PdPlJT7HexeauYzOFddSFueyG_HbA" },
            { title: "Stages", thumbnail: "https://www.billboard.com/wp-content/uploads/2023/08/NewJeans-2023-Lollapalooza-Festival-billboard-1548.jpg?w=1024", link: "https://www.youtube.com/playlist?list=PLNy-PdPlJT7HxKQVQMnYHTLfsu5WJCPI8" }
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/newjeans_official/?hl=en",
            amino: "https://aminoapps.com/c/newjeans/home/",
            spotify: "https://open.spotify.com/intl-pt/artist/6HvZYsbFfjnjFrWF950C9d/discography/all",
            youtube: "https://www.youtube.com/@NewJeans_official"
        }
    },
    7: {
        name: "JungKook",
        description: "O mais novo membro do grupo masculino BTS, conhecido por sua voz poderosa, habilidades de dança e visual atraente.",
        image: "https://bloganchoi.com/wp-content/uploads/2022/11/eu-phoia-696x290.jpg",
        members: [
            { name: "Este artista é um membro de BTS.", photo: "https://qph.cf2.quoracdn.net/main-qimg-bc4c090b9bd22e5a34abe8cb1f1366f9-lq", link: "#" }
        ],
        discography: [
            { title: "Never Let Go", cover: "https://ibighit.com/bts/images/bts/discography/jung-kook/never-let-go/album-cover.png", link: "https://open.spotify.com/intl-pt/album/6zXydimgenc15N3LWmf0cn" },
            { title: "Standing Next to You (USHER REMIX)", cover: "https://i.scdn.co/image/ab67616d0000b273c9912de0a8a9a44b450318e4", link: "https://open.spotify.com/intl-pt/album/3bKfV6NFUOd6KMCkDJyEbh" },
            { title: "3D (Justin Timberlake Remix)", cover: "https://external-preview.redd.it/jungkook-bts-3d-justin-timberlake-remix-v0-KGy9xpGx5-tZvvy_5s0CxpHljfZPC42OfKPIwRL1KwY.jpg?auto=webp&s=cd87e5f02f610bd66d2cee6d60b50878240d08d9", link: "https://open.spotify.com/intl-pt/album/4SNBgrYqk2aV4LyXbTSkYA" }
        ],
        videography: [
            { title: "Standing Next to You MV", thumbnail: "https://i.ytimg.com/vi/UNo0TG9LwwI/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=UNo0TG9LwwI" },
            { title: "Seven MV", thumbnail: "https://i.ytimg.com/vi/QU9c0053UAU/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=QU9c0053UAU" },
            { title: "Hate You (Visualizer)", thumbnail: "https://i.ytimg.com/vi/tAcKfnf0zv4/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=tAcKfnf0zv4" }
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/jungkook_bighitentertainment/?hl=en",
            amino: "https://aminoapps.com/c/kpop-portugues/page/item/jungkook/qJEP_YaF3IBNGeBoMVdvvW5bMNompB673a",
            spotify: "https://open.spotify.com/intl-pt/artist/6HaGTQPmzraVmaVxvz6EUc/discography/all",
            youtube: "https://www.youtube.com/results?search_query=jungkook"
        }
    },
    8: {
        name: "Jackson Wang",
        description: "Ex-membro do grupo masculino GOT7, atualmente um artista solo de sucesso, conhecido por sua música versátil e sua popularidade global.",
        image: "https://cdn.shopify.com/s/files/1/0469/3927/5428/files/Banner_e1207b00-46ad-4d62-9e2f-28940906fb2f.png?v=1695036376",
        members: [
            { name: "Este artista é um membro de GOT7.", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZjcr_2DpsKOuYJt3i0K8gtTbTdy8wZFxxw&s", link: "#" }
        ],
        discography: [
            { title: "henny", cover: "https://i.scdn.co/image/ab67616d0000b273a974194cc90b0f2aaaedcfe1", link: "https://open.spotify.com/intl-pt/album/1MYys9eOyIxpEqG4bVVkZX" },
            { title: "Feeling Lucky", cover: "https://i.scdn.co/image/ab67616d0000b273faad2d39e6eb398a6d5c8f47", link: "https://open.spotify.com/intl-pt/album/4bc9PfPyv60qCh5S5g5eMb" },
            { title: "Cheetah", cover: "https://i.scdn.co/image/ab67616d0000b273dc948460a8f5b07124d98a9b", link: "https://open.spotify.com/intl-pt/album/4nK0XlFVAQNesqpijBX1Ri" }
        ],
        videography: [
            { title: "Magic Man 2", thumbnail: "https://www.billboard.com/wp-content/uploads/2023/04/Jackson-Wang-Ciara-Slow-screenshot-billboard-1548.jpg", link: "https://www.youtube.com/playlist?list=PLyBYOaspVGULUgEhY4ObVDh0w1Jat4PQL" },
            { title: "Magic Man Promo", thumbnail: "https://www.billboard.com/wp-content/uploads/2022/07/Jackson-Wang-Cruel-screenshot-2022-billboard-1548.jpg", link: "https://www.youtube.com/playlist?list=PLyBYOaspVGUISQnPBZHMIoraxuy4abe73" },
            { title: "Drive You Home", thumbnail: "https://image.kpopmap.com/2021/07/Jackson-Wang-Internet-Money-Drive-You-Home-Official-Music-Video.jpeg", link: "https://www.youtube.com/playlist?list=PLyBYOaspVGUKm9e6Oxe634-B4qdqQujTc" }
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/jacksonwang852g7/",
            amino: "https://aminoapps.com/c/jackson-wang/home/",
            spotify: "https://open.spotify.com/intl-pt/artist/1kfWoWgCugPkyxQP8lkRlY/discography/all",
            youtube: "https://www.youtube.com/@jacksonwang"
        }
    },
    9: {
        name: "Uhm Jung Hwa",
        description: "Uma das pioneiras do K-pop, considerada a 'Rainha do K-pop', com uma carreira longa e bem-sucedida, conhecida por suas performances poderosas e músicas icônicas.",
        image: "https://i.ytimg.com/vi/FgnWonqxp1c/maxresdefault.jpg",
        members: [
            { name: "Esta artista não pertence a nenhum grupo.", photo: "https://hopamchuan.com/node/get_artist_image/uhm_jung_hwa", link: "#" }
        ],
        discography: [
            { title: "MISS FORTUNE", cover: "https://i.scdn.co/image/ab67616d0000b273e8016c7b8a99fd908e311bbd", link: "https://open.spotify.com/intl-pt/album/3b2Jm1AiZVgY49GLDcmTu3" },
            { title: "Seoul Check-in OST Part 3", cover: "https://i.scdn.co/image/ab67616d0000b27348dde772a319a7391b693ab2", link: "https://open.spotify.com/intl-pt/album/6RPncLDPcNlnuFrxLNGmFx" },
            { title: "Hop in", cover: "https://i.scdn.co/image/ab67616d0000b27385f83804e93f797799f5e78e", link: "https://open.spotify.com/intl-pt/album/3H7SegvbrluL787hau5gQB" }
        ],
        videography: [
            { title: "Invitation MV", thumbnail: "https://i.ytimg.com/vi/eFVfBbiYvm0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzH3LRUollNPAtKPhRYbdGLcyNug", link: "https://www.youtube.com/watch?v=eFVfBbiYvm0" },
            { title: "Let Me Cry MV", thumbnail: "https://i.ytimg.com/vi/3MBu6Y1RNsY/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=3MBu6Y1RNsY" },
            { title: "Gap MV", thumbnail: "https://i.ytimg.com/vi/6Lme10OY71E/sddefault.jpg", link: "https://www.youtube.com/watch?v=6Lme10OY71E" }
        ],
        socialLinks: {
            instagram: "https://www.instagram.com/umaizing/?hl=en",
            amino: "https://aminoapps.com/c/k-pop/page/item/uhm-jung-hwa/XrIX_I13we75QbKewk6wzqnkX7wnj",
            spotify: "https://open.spotify.com/intl-pt/artist/7xGZWuU7JrDQmJ00L9UzhB/discography/all",
            youtube: "https://www.youtube.com/results?search_query=uh+jung+hwa"
        }
    },
};
