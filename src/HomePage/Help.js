import React from 'react';
import Container from 'react-bootstrap/Container';

class HelpApp extends React.Component {
    render() {
        return (
            <div>
                <Container fluid="lg">
                    <h2 className="text-warning" style={{ textAlign: 'center', paddingTop: '100px' }}>Overview</h2>
                    <h6 style={{ fontSize: '15px' }}>Welcome to the Help Section of Quiz Whiz! I've written a VERY detailed explanation of the 
                        questions you will encounter in Bible Quizzing. This can be the most confusing part of TBQ,
                        and even after quizzing for multiple years, I myself wouldn't have known everything I'm 
                        about to share with you. I know it is a lot to read, so break it up, and read it in pieces.
                    </h6>
                    <br />
                    <h4 className="text-warning">Question Format:</h4>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>There are two parts to every question that will be asked 
                        in Penn-Del Middle School Teen Bible Quizzing. Each one will begin with Introductory Remarks, followed 
                        by the question on the content itself. These opening statements are important to pay attention to, because 
                        they give information on what chapter/section title the question is coming from, what kind of answer 
                        the quizmaster is looking for, and the point value of the question. The format follows something like this:
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>Question Number</li>
                        <li>Point Value</li>
                        <li>Type of Question</li>
                        <li>Where this Question is Coming From</li>
                        <li>Other Miscellaneous Information</li>
                        <li>Finally, the Question Itself</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        Here is an example: Question number 1 for 10 points. Give a Complete Answer from Matthew 
                        Chapter 1. Whose genealogy is mentioned? Okay, let's break this down and figure out the answer. The first
                        sentence is easy. This is the first question of the match, and it's worth 10 points. This means that the 
                        question is going to be relatively easy to answer. Next is the phrase "Give a Complete Answer". This tells 
                        me that the answer to this question is more than one word; it must be a phrase. So, "Jesus", would be an 
                        incorrect answer. 
                    </h6>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        Moving on, we hear that they are looking for an answer from the first chapter of Matthew.
                        Sometimes, the same words or phrases show up in multiple places of the book, so this phrase limits where our
                        response can come from. Also, not every quizzer studies every chapter; some people focus on just a few. When
                        you hear that this question is being asked from a chapter you know, you can be confident you have the answer.
                        The last part is the question itself. So after paying attention to all the information that was given to you, 
                        you know that the correct answer is "Jesus the Messiah". Congratulations! You just answered your first Bible 
                        Quiz question! Read on to learn about other question types. 
                    </h6>
                    <h4 className="text-warning">Question Types:</h4>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        There are five main kinds of questions that can be asked, with several 
                        variations that are necessary to keep in mind.
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>Give a Complete Answer </li>
                        <li>Scripture Text Question</li>
                        <li>Essence/Quotation Questions</li>
                        <li>Chapter Analysis</li>
                        <li>Application Questions</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>We've already looked at Give a Complete Answer. On to the next one:
                        Scripture Text Question. This means that when the actual question is asked, it will have the word "quote" in it and
                        contain a quote directly from the Scripture portion. Here's an example: Question number 2 for 10 points. Scripture 
                        Text Question. From Matthew Chapter 1. How many generations were from David to the, quote, "exile to Babylon"? This 
                        is pretty straightforward. Including a part of the verse in the question helps direct quizzers to know exactly where 
                        the answer is supposed to be. It also help quizzers interrupt questions, but we'll talk more about that later. The 
                        answer to this question is simply "14". All right, two down, three more to go! Essence/Quotation Questions. There are 
                        a couple variations to this one, and I think the way to best explain all of them is to give you examples. 
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>Essence Question: Question number 3 for 20 points. Essence Question. From Matthew. Give in essence verse 16 from the opening chapter.</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        To get this one correct, you must quote all of verse 16 from Matthew Chapter 1. Now, the word essence means that it doesn't 
                        have to be word perfect. What you need to say is all of the key phrases, but it is okay if you stumble over a word, or if you 
                        mix things up a bit. As long as you give the "essence" of the correct verse, you will be fine. 
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>Quotation Question: Question number 4 for 30 points. Quotation Question. From Matthew. Quote verse 2 from the opening chapter.</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        To get this one correct, you must quote the verse perfectly. If you stutter, or repeat a word, you will be incorrect. You must
                        start with the first word of the verse and say no more the verse they are asking for. This one is very strict, which is why it 
                        is worth 30 points, the highest point value. 
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>Essence Completion Question: Question number 5 for 20 points. Essence Completion Question. From Matthew Chapter 1. Finish, in essence, this verse, quote, "Thus there were..."</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        To get this one correct, they are asking you to finish the verse that they started giving. As long as you say all the key phrases
                        and main points of the verse, you will be fine. It doesn't have to be perfect.
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>Quotation Completion Question: Question number 6 for 30 points. Quotation Completion Question. From Matthew Chapter 1. Finish this verse, quote, "Abraham..."</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        At this point, you probably get the drift. They are asking you to complete the verse they started, but you must say it
                        perfectly. One important thing to know is that both Essence and Quotation Completions Questions will always and only start
                        with a unique word that can differentiate it from every other verse within the section of Scripture it is coming from. No other
                        verses in Matthew Chapter 1 start with either the words "Thus" or "Abraham", so the quizzer can know exactly which verse the
                        quizmaster is asking them to finish. 
                    </h6>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        Hanging in there? We've got a bit more ground to cover, so get up and stretch before we dive into Chapter Analysis Questions.
                        The answers to every Chapter Analysis Question are going to be listed in the back of your quiz book. They can be:
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>Individuals (like "Jesus")</li>
                        <li>Locations (like "Judea")</li>
                        <li>Questions (like "Where is the one who has been born king of the Jews?")</li>
                        <li>Exclamations (like "You fool!")</li>
                        <li>Old Testament Scripture (like "Out of Egypt I called my son")</li>
                        <li>Parentetical Statements (like "which means God with us")</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        If you open your quiz book, after the final chapter, there are Endnotes, and then all of the Chapter Analyis content is written
                        out for you. Some quizzers like to highlight their books with all this information, as it helps them remember where it is all 
                        found. A Chapter Analyis Questions sounds like this: Question number 7 for 10 points. Chapter Analysis Answer. From the section
                        titled "The Genealogy of Jesus". Rahab was the mother of whom?
                    </h6>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        Answering this question can sometimes be a bit tricky. If the answer is an individual or geographical location, a few extra words 
                        are allowed. For example, if the text refers to Jesus as Jesus Christ or our Lord Jesus Christ, both those answers would be okay to
                        give, even though only the name Jesus is technically a Chapter Analysis answer. And if they are asking for more than one answer, such 
                        as Judea and Jerusalem, using the connecting word "and" is allowed. Just be careful not to quote the verse, or say too many unnecessary
                        words. For all other Chapter Analysis answers, you must give all key words and phrases, but it doesn't have to be word perfect. Once again,
                        just be careful not to quote the entire verse or say too many extra words. 
                    </h6>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        The last question type was one of my favorites. Each meet, quizzers will receive a sheet of paper with pre-written answers and questions. 
                        Two questions on that paper will be asked in every round of every meet. They are essentially free points. You are allowed to memorize 
                        the question and the answer, and you can interrupt at any point after the Introductory remarks. They usually are just theological points or
                        historical information that deal with the material we are studying and sometimes explain certain verses or how to apply them to our daily
                        lives. The phrase "Application Question" will always be said during the Introductory Remarks. 
                    </h6>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        As we finish up this section, I want to note a few things:
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>There can be multiple question types in one question.</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        For example, it can be 
                        both a Give a Complete Answer and a Chapter Analysis Question.
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>There can be more than one part to a question or answer.</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        Sometimes a question will ask for more than one answer, such as "Tamar was the mother of whom?" The answers are "Perez" and
                        "Zerah". Or there will be multiple questions asked at once, such as "According to the 21st verse, Mary will do what, and Joseph
                        should do what?" The answer is something like, "Mary will give birth to a son, and Joseph should give him the name Jesus".
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>There can be a statement before a question is asked.</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        After the Introductory Remarks, there may be another statement before the actual question is asked. The whole question will sound
                        like this: "Question number 7 for 30 points. Statement and Quotation Question. Tamar is named in one verse. Quote this verse."
                    </h6>
                    <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                        <li>There might not even be a question type.</li>
                    </ul>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        After you've spent so much time studying all the question types, sometimes there isn't one! If it's a simple question that 
                        doesn't fit any of the categories, there won't be any informtion about the question type in the Introductory Remarks. To get 
                        this one right, you just have to give a response that answers the question. This won't happen too often, but it is good to keep 
                        in mind that it is a possibility and not an error. 
                    </h6>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        Lastly, please keep in mind that this is not a rulebook. I studied the rulebook in writing this, but this is not an authoritative work
                        on the subject, and shouldn't be used in contesting anything. I just hope you gained a better knowledge of TBQ in reading this.  
                        No one knows everything right off the bat; it takes time. Please, please, PLEASE don't be afraid to ask questions if you don't understand
                        something. Your coach, your league coordinator, myself, and experienced quizzers are resources if you are struggling with anything. 
                    </h6>
                    <h4 className="text-warning">How to Answer:</h4>
                    <h6 style={{ textAlign: 'left', padding: '15px' }}>
                        Speak loud enough for people to hear you. Even if you are naturally a quiet person, the officials have to hear your answer.
                        Be sure to pronouce things clearly. Sometimes there are difficult names or locations to say, but you can't get a question wrong
                        just because you mispronounced "Mephibosheth". If you've given your answer, but the quizmaster hasn't said anything, KEEP TALKING! You might just be missing one word or phrase,
                        and if they haven't ruled you incorrect, you can still get the question right. Too many people just sit there and wait, when they
                        have a better chance of getting it right if they repeat what they said. Be confident! You've studied, you know the material, so 
                        have fun!
                    </h6>
                </Container>
            </div>
        )
    }
}

export default HelpApp;