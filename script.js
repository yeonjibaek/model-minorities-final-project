// this is for card flip!!!
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
});


// this is for the quiz & results section!!!
const questions = [
    {
        "question": "You enter a familiar kitchen, years after your mother has passed. The air is quiet, but the lingering scents of garlic, sesame oil, and old spices promise a deep history. You decide to make one of her most complex dishes.\n\nYou realize you are missing a rare, fermented ingredient that your mother insisted upon.",
        "answers": [
            { "text": "I spend hours searching multiple stores or online until I find an exact match.", "type": "P" },
            { "text": "I look up recipes to find the closest, most suitable non-Korean substitute.", "type": "T" },
            { "text": "I give up; the dish won't be the same without the original ingredient's essence.", "type": "G" },
            { "text": "I determine the quickest, most cost-effective substitute to finish the meal.", "type": "R" }
        ]
    },
    {
        "question": "The handwritten recipe is stained and some instructions are illegible.",
        "answers": [
            { "text": "I call a relative or friend to verbally translate the ambiguous steps and techniques.", "type": "T" },
            { "text": "I rely on a deep emotional memory of watching my mother cook it over the years.", "type": "M" },
            { "text": "I follow a modern, highly-rated online recipe that simplifies the difficult parts.", "type": "R" },
            { "text": "I focus on the aesthetic and presentation, hoping my own flair will make up for any missing steps.", "type": "F" }
        ]
    },
    {
        "question": "The dish requires 4 hours of slow stirring and repetitive labor.",
        "answers": [
            { "text": "I find a deep, almost meditative comfort in the meticulous and repetitive work.", "type": "P" },
            { "text": "I put on music or a podcast, using the time to process complicated feelings and grief.", "type": "G" },
            { "text": "I invite a friend over to help, using the time to bridge our two worlds through conversation.", "type": "T" },
            { "text": "I delegate the stirring to a machine or delay the process until I have uninterrupted time.", "type": "O" }
        ]
    },
    {
        "question": "Your sternest, most traditional relative arrives early and asks, \"Did you follow the proper steps?\"",
        "answers": [
            { "text": "I defend the traditional steps I followed, emphasizing my adherence to the process.", "type": "P" },
            { "text": "I quickly apologize for any deviations and try to change the topic to something light.", "type": "N" },
            { "text": "I admit I followed my own instinct and ask why tradition must be so rigid.", "type": "O" },
            { "text": "I share a warm memory of my mother and the dish, using emotion to disarm the critique.", "type": "M" }
        ]
    },
    {
        "question": "There is a large amount of food left.",
        "answers": [
            { "text": "I plan to systematically freeze and label the leftovers for future consumption.", "type": "R" },
            { "text": "I feel a sense of obligation and try to find neighbors or friends to share the bounty with.", "type": "N" },
            { "text": "I know I will return to the food when I am sad, using it as a comfort ritual.", "type": "G" },
            { "text": "I take a beautiful photo of the final product to post online, sharing the achievement.", "type": "F" }
        ]
    },
    {
        "question": "After cleaning the kitchen, you find a dusty box of old family letters and documents. They speak of struggles you never knew, and successes you barely remember. You must decide how to manage this heritage. \n\nThe letters are in an ancestral language you can only partially read.",
        "answers": [
            { "text": "I spend time translating key phrases, focusing on understanding the emotional subtext.", "type": "T" },
            { "text": "I prioritize gathering the facts, dates, and historical details documented in the letters.", "type": "M" },
            { "text": "I feel a profound sadness at the communication barrier and the pieces of history that are permanently lost.", "type": "G" },
            { "text": "I feel resentment that I was not fully taught the language needed for this task.", "type": "O" }
        ]
    },
    {
        "question": "One document hints at a long-buried family secret or conflict.",
        "answers": [
            { "text": "I use careful, neutral language to ask family members about the event to get their varying perspectives.", "type": "N" },
            { "text": "I decide the secret is too painful and must remain buried to protect the living.", "type": "G" },
            { "text": "I analyze the document's structure and authorship to find the logical, unemotional truth.", "type": "R" },
            { "text": "I realize this painful event is a powerful story that should be shared through my art.", "type": "F" }
        ]
    },
    {
        "question": "You need to research the historical events referenced in the documents.",
        "answers": [
            { "text": "I search for scholarly articles and academic sources to place the family story within a larger historical narrative.", "type": "M" },
            { "text": "I seek out first-person accounts and personal stories from people who lived through that time.", "type": "G" },
            { "text": "I look for a creative, emotional outlet (music, writing) to process the weight of the history.", "type": "F" },
            { "text": "I focus on how the historical event directly affected my family's financial and physical mobility.", "type": "R" }
        ]
    },
    {
        "question": "You consider writing about the family history for a public audience.",
        "answers": [
            { "text": "I feel the pressure to make sure the story reflects positively on the entire ethnic group.", "type": "P" },
            { "text": "I write the story raw and unfiltered, rejecting the need for outside approval or polish.", "type": "O" },
            { "text": "I strive to balance the family's honor with the need for an honest, personal narrative.", "type": "N" },
            { "text": "I use literary devices and narrative flair to ensure the story is engaging and widely read.", "type": "F" }
        ]
    },
    {
        "question": "The box of documents is damaged, and some items are destroyed.",
        "answers": [
            { "text": "I feel a profound, acute sense of irreparable loss and mourn the destroyed history.", "type": "G" },
            { "text": "I immediately attempt to catalog and preserve whatever remains, focusing on damage control.", "type": "P" },
            { "text": "I decide that these documents were just external markers, and the real history is carried inside me.", "type": "O" },
            { "text": "I look for digital copies or external public records to restore the lost information efficiently.", "type": "R" }
        ]
    },
    {
        "question": "You step out into the world, aware of the two cultural landscapes you navigate. You must perform your identity for others, while deciding what kind of future you will build. \n\nA colleague asks you, \"Where are you really from?\"",
        "answers": [
            { "text": "I step in immediately to politely educate them on the history and nuance of the question.", "type": "T" },
            { "text": "I withdraw, feeling frustrated that this tension constantly surfaces in my life.", "type": "O" },
            { "text": "I make a joke or use humor to diffuse the awkwardness and maintain social harmony.", "type": "N" },
            { "text": "I see it as a painful reminder and use the emotion to inspire a new, reflective piece of writing.", "type": "F" }
        ]
    },
    {
        "question": "You commit to learning an ancestral craft/ritual (e.g., calligraphy, traditional music).",
        "answers": [
            { "text": "I strive for technical perfection and mastery, focusing on the correct form and ritual.", "type": "P" },
            { "text": "I prioritize using the practice to connect with older generations and hear their stories.", "type": "M" },
            { "text": "I find my own way to adapt the practice, changing rules that feel irrelevant to me.", "type": "O" },
            { "text": "I approach it with the goal of being good enough to teach or share with my peers.", "type": "T" }
        ]
    },
    {
        "question": "You hear the myth used as a political argument.",
        "answers": [
            { "text": "I feel the sadness and burden of the pressure it puts on me and others.", "type": "G" },
            { "text": "I see it as a harmful lie and feel driven to express my full, complex reality publicly.", "type": "F" },
            { "text": "I feel a lingering, inherited pressure to achieve and uphold a standard of excellence.", "type": "P" },
            { "text": "I ignore it; I believe my own actions and self-definition are more important than external labels.", "type": "O" }
        ]
    },
    {
        "question": "You are asked to define your \"Asian Americanness.\"",
        "answers": [
            { "text": "I carefully craft a nuanced definition that accounts for history, politics, and diaspora.", "type": "T" },
            { "text": "I use an emotional story or anecdote to show the feeling, rather than define the label.", "type": "G" },
            { "text": "I state that the label is too constraining and refuse to define myself by it.", "type": "O" },
            { "text": "I share a concrete personal achievement or family success story that is representative.", "type": "P" }
        ]
    },
    {
        "question": "You envision the legacy you want to leave.",
        "answers": [
            { "text": "I want a reputation for solving problems and creating stability for my community.", "type": "R" },
            { "text": "I want to be known for my emotional honesty and courage in facing difficult truths.", "type": "G" },
            { "text": "I want to leave behind a rich archive of stories, memories, and personal history.", "type": "M" },
            { "text": "I want to be known for my kindness and my ability to unite people with different ideas.", "type": "N" }
        ]
    }
];

// these are all the possible themes that an user can get
const themeDescriptions = {
    "P": { title: "The Preserver", desc: "You are The Preserver. Your core identity is that of the Archivist and the Resilient guardian of heritage. Your primary motivation is the inherited obligation to maintain and protect cultural practices against the forces of assimilation and loss, reflecting the burden of generational responsibility. Your strengths are that you are Unwavering in Focus and Culturally Fluent; your commitment ensures traditions survive by mastering difficult skills, often seen in the laborious perfection of a beloved family dish. Your greatest challenge is being Perfectionistic and prone to High Anxiety; your fear of losing heritage leads to immense self-imposed stress and difficulty accepting change or adaptation. You get along best with The Translator, as you provide the deep cultural knowledge they need to communicate to the wider world. Your mismatched combo is The Outsider, because you view their questioning of cultural value as a dangerous threat to the heritage you are fighting to protect." },
    "T": { title: "The Translator", desc: "You are The Translator. Your core identity is the Connector and the Bicultural Broker. You are defined by your ability to move fluidly between cultural spaces and language systems, serving as the necessary link between immigrant generations and American society. Your strengths are that you are Articulate and Empathetic; your natural position as an intermediary gives you a profound understanding of both sides of the cultural gap. Your greatest challenge is Vocal Fatigue and feeling Culturally Exhausted; this constant work of interpreting feelings, language, and cultural codes is a heavy, often-unseen form of emotional labor. You get along best with The Preserver, as you rely on their mastery of the culture (food, language) to inform and legitimize the interpretations you share with the outside world. Your mismatched combo is The Pragmatist, because they dismiss the nuanced, emotional work of translation as inefficient or unnecessary, valuing practical gain over cultural connection." },
    "G": { title: "The Griever", desc: "You are The Griever. Your core identity is Deeply Feeling and Introspective. You center on the internal processing of pain, loss, and the unarticulated emotional burdens of your family history, reflecting the suppressed \"unwellness\" in Asian American life. Your strengths are that you are Profoundly Empathetic and Emotionally Honest; your willingness to sit with sadness gives you profound insight into the complexity of the human experience. Your greatest challenge is Emotional Isolation and being Overwhelmed by Sadness; you risk withdrawing from others because you feel your specific cultural grief is too difficult for them to understand or witness. You get along best with The Memory-Keeper, as you both value emotional depth and can sit in silence together, sharing the weight of the past without needing to intellectualize it. Your mismatched combo is The Pragmatist, because they see your deep emotional processing as counterproductive and inefficient, valuing forward momentum over reflection." },
    "R": { title: "The Pragmatist", desc: "You are The Pragmatist. Your core identity is Organized and Security-Oriented. You prioritize stability, control, and efficiency, often viewing success through measurable, rational metrics, aligning with the Model Minority pressure to achieve financial security. Your strengths are being Reliable and a strong Problem-Solver; you are the one who manages crises, pays the bills, and keeps things functioning, often managing the unromantic logistics of family life. Your greatest challenge is being Coldly Analytical and prone to Burnout; your relentless focus on outcomes can lead you to overlook emotional needs and dismiss feelings as illogical obstacles. You get along best with The Negotiator, as you both value order and avoiding major conflict, allowing you to collaborate effectively on logistics. Your mismatched combo is The Performer, because you view their pursuit of non-traditional careers, attention, and emotional self-expression as frivolous, risky, and inefficient." },
    "O": { title: "The Outsider", desc: "You are The Outsider. Your core identity is Questioning and Free-Willed. You resist prescribed norms and often feel alienated from both the ancestral and American cultures, reflecting the crisis of belonging. Your strengths are being Self-Defined and possessing Intellectual Independence; you challenge assumptions and seek a self-actualized identity outside of inherited or imposed roles. Your greatest challenge includes Nihilistic Tendencies and Social Isolation; your rejection of belonging can lead to cynicism and a feeling that you are perpetually lost between worlds. You get along best with The Performer, as both roles share a willingness to reject traditional expectations and embrace non-conventional paths of self-expression and individualism. Your mismatched combo is The Preserver, because you view their strict adherence to tradition as a stifling form of assimilation and control that hinders personal freedom." },
    "F": { title: "The Performer", desc: "You are The Performer. Your core identity is Expressive and Vulnerable. You process and externalize internal conflict through art, music, or storytelling, using creative output as a way to establish a public identity. Your strengths are being Compelling and Authentic; your willingness to share your complex emotional reality often resonates deeply with others. Your greatest challenge is Seeking External Validation and a tendency toward Dramatic Flair; you can struggle with the boundary between genuine expression and performing your trauma or identity for an audience. You get along best with The Outsider, as you both recognize the need to break away from traditional expectations and use unconventional means to define yourselves. Your mismatched combo is The Pragmatist, as your focus on non-traditional, emotional, and public careers is seen as dangerously impractical." },
    "M": { title: "The Memory-Keeper", desc: "You are The Memory-Keeper. Your core identity is Reflective and Historical. You are driven by the desire to understand the past, not just for emotion, but for context and meaning, creating an internal and external archive of family and cultural history. Your strengths are being Deeply Informed and Patient; you take the time to document, listen, and research the history that gives your present identity meaning. Your greatest challenge includes being Stuck in the Past and Overly Academic; you can sometimes prioritize historical documentation over engaging with the present emotional reality of others. You get along best with The Griever, as you both are focused on connecting with the past and acknowledging the difficult emotions contained within history and memory. Your mismatched combo is The Negotiator, because they would prefer to let painful, conflict-inducing histories fade away for the sake of current family peace, which clashes with your commitment to recording all truths." },
    "N": { title: "The Negotiator", desc: "You are The Negotiator. Your core identity is Diplomatic and Peace-Keeper. You operate to prevent or minimize conflict, often taking on the role of mediator between strong personalities or opposing cultural viewpoints, reflecting the value and social harmony. Your strengths are being Harmonious and a strong Listener; your ability to see all sides makes you invaluable in maintaining family unity. Your greatest challenge is Avoiding Conflict and Self-Sacrifice; you often suppress your own needs and feelings to ensure the happiness of others, leading to resentment or suppressed issues. You get along best with The Pragmatist, as you both prioritize stability, order, and predictable outcomes, allowing you to work together to run a functional life. Your mismatched combo is The Memory-Keeper, because you would prefer to let painful, conflict-inducing histories fade away for the sake of current family peace, which clashes with the Memory-Keeper's commitment to recording all truths." }
};

// this is to track the point system
let currentQuestionIndex = 0;
let scores = { P:0, T:0, G:0, R:0, O:0, F:0, M:0, N:0 };

// retrieving the key to count for point system
const questionContainer = document.getElementById('question-section');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-section');

// this start/restarts the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    for (let key in scores) scores[key] = 0;
    
    questionContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    showQuestion();
}

// this displays the questions!!
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        
        // this will store the key in the dataset
        button.dataset.type = answer.type;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// we want to restart everything if the user restarts
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// how to work with the answer choices
function selectAnswer(e) {
    const selectedBtn = e.target;
    const type = selectedBtn.dataset.type;
    
    if (scores[type] !== undefined) {
        scores[type]++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// calculating function for the theme
function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    let maxScore = 0;
    let resultType = "";

    for (let key in scores) {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            resultType = key;
        }
    }

    // Fallback if no result found (shouldn't happen)
    if (resultType === "") resultType = "N"; 

    // this updates the HTML
    const resultData = themeDescriptions[resultType];
    document.getElementById('result-title').innerText = resultData.title;
    document.getElementById('result-desc').innerText = resultData.desc;
}

// starting
startQuiz();
