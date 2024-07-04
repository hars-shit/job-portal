 const Templates=[
    {
        name:'Job Title',
        desc:'A Tool that helps you to generate Job Post',
        category:'Blog',
        icon:"https://cdn-icons-png.flaticon.com/128/5082/5082720.png",
        aiPrompt:"Give me 5 blog topic idea in bullet wise only based on give niche and outline and give me reason in rich text editor format", 
        slug:"generate-blog-title",
        form:[
            {
                label:"Enter Your Job Title",
                field:'input',
                name:'title',
                required:true
            },
            {
                label:"Enter Your Job Experience niche",
                field:'select',
                name:'niche',
                required:true
            },{
                label:"Enter Job Description (optional)",
                field:"textarea",
                name:"outline",
            }
        ]
    }
]

export default Templates