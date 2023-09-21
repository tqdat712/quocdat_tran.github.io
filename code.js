const projects = [{
    name: 'Portfolio website', 
    id :1,
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433',
    ], 
    details: ['Used HTML, CSS and JavaScripts with different frameworks.',
    'Created different text animations and transitions.', 
    'Deployed using Github.',
    ],
},{
    name: 'SpaceX Launch Programs Analysis',
    id:2,
    images: ['https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/449px-Pandas_mark.svg.png?20200210000431',
    ],
    details: ['Gathered information from SpaceX API and web scraping.',
    'Performed Exploratory Data Analysis (EDA) using visualization and SQL.',
    'Performed interactive visual analytics using Folium and Plotly Dash.','Leveraged machine learning classification models for predictive data analysis.',
    'Authored a thorough, detailed examination of the findings.',
    ],
},{
    name: 'Convolutional Neural Network Images Classifier(CNN)',
    id:3, 
    images: ['https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png?20211003060202',
    'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
    ],
    details: ['Accquired data from Kaggle',
    'Conducted data preprocessing and data augmentation with OpenCV, imageop and imgaug.', 
    'Performed weighted random sampler for imbalanced data.', 
    'Implemented multiple CNN training models with different architectures and activation functions with Pytorch.',
    'Graphically represented their performance with matplotlib and sklearn.',
    'Achieved 65% accuracy.',
    ],
},{
    name: 'Natural Language Processing (NLP)',
    id:4,
    images:['https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png?20211003060202',
    'https://miro.medium.com/v2/resize:fit:766/1*eD7YzjE92fjXZf8zf0qq_w.png',
    ],
    details: ['Conducted data preprocessing by dividing training sentences into tokens using OpenAI-GPT and Bert tokenizers.',
    'Implemented multiple training models: Casual language model, Masked language model, and Sequence-to-sequence model using Pytorch.',
    'The Masked language model achieved the ability to effectively complete missing portions within a sentence.',
    'The Sequence-to-Sequence model exhibited a noteworthy capability to proficiently summarize concise textual content (such as articles or poems).',
    ],
},{
    name: 'POS tagging with Hidden Markov Model',
    id:5,
    images:['https://wisdomml.in/wp-content/uploads/2023/04/HMM3.png',
    ],
    details: ['Implemented Hidden Markov Model training and used it to predict the joint probability of a sentence with given POS tags',
    'Implemented max a posteriori inference to predict the POS tags of a sentence.',
    'Conducted quantitive experiments on training and validation sets.',
    'Graphically represented performances of different values of hyperparameter with matplotlib.',
    'Achieved 94.1% word-level (ratio of correctly predicted POS tags) accuracy and 42.4% sentence-level (ratio of sentences whose predicted POS tags are all correct) accuray.'],
},{
    name: 'Code scanning game',
    id: 6,
    images:['https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Android_logo_2023_%28stacked%29.svg/1024px-Android_logo_2023_%28stacked%29.svg.png',
    'https://raw.githubusercontent.com/CMPUT301W22T30/QRCode/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png',],
    details:['Participated in developing the game, drawing inspiration from the mechanics of Pokemon Go, where players scanned QR and bar codes instead of capturing Pokemon, using Java and Android Studio.',
    'Designed the distinctive logo for the game.',
    'Implemented advanced security measures, employing SHA256 encryption to protect user passwords.',
    'Responsible for extensive game testing including camera testing, unit testing, and intent testing.',
    'Engaged in the development of Unified Modeling Language (UML) diagrams, execution of Class Responsibility Collaborator (CRC) modeling, and design of the User Interface (UI).',
    'Achieved over 50 players in the first week of release.',],
    demo:"https://www.youtube.com/shorts/6qDXbFS1K5w",
},{
    name: 'Ongoing and future projects',
    id:7,
    images:['https://png.pngtree.com/png-clipart/20220704/original/pngtree-coming-soon-banner-style-png-image_8316626.png'],
    details:['Personal schedule and notes web app using Django and React.',
    'Stock price monitor app with analysis and prediction using Django, Flask and Machine Learning.']
}];



let codeHTML = '';
projects.forEach((project) => {
    
    codeHTML+= `
    <div class="project project-${project.id}">
        <div class="text">
            <div class="hidden">
                <h1> ${project.name} </h1>
                <ul>`;
    project.details.forEach((detail) =>{
        codeHTML+=  `<li>${detail}</li>`
    });
    
    if (project.hasOwnProperty('demo')) {
        codeHTML += `<li><a href=${project.demo}>Demo</a></li>`;
    }
    codeHTML+= `
                </ul>
            </div>`
            
    
        codeHTML+=
        `
        </div>
        <div class="image">
        <div class="hidden" style="display:grid;grid-gap: 1%;grid-template-rows: auto; height:100%;";>`
        let total = project.images.length;
        project.images.forEach((image) => {
        
        codeHTML+= `
                <img src="${image}" style="object-fit: fit; width: auto;max-height: ${Math.floor(260/total)}px; max-width: 100%">
            `
    })
    codeHTML+=
    `   </div>
        </div>  
    </div>
    `;
});

document.querySelector('.code-container').innerHTML = codeHTML;
