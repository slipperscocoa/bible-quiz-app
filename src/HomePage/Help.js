import React from 'react';

class HelpApp extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-warning" style={{ textAlign: 'center', paddingTop: '90px' }}>Overview</h2>
                <br/>
                <h4>Question Types:</h4>
                <h6 style={{ textAlign: 'left', padding: '15px' }}>There are two parts to every question that will be asked in Penn-Del Middle School Teen Bible Quizzing.
                    Each one will begin with Introductory Remarks, followed by the question on the content itself. These 
                    opening statements are important to pay attention to, because they give information on what chapter/
                    section title the question is coming from, and what kind of answer the quizmaster is looking for.
                    There are four main kinds of questions that can be asked, with several variations that are necessary to 
                    keep in mind.
                 </h6>
                <ul style={{ listStyleType: 'none' }}>
                    <li>Give a Complete Answer </li>
                    <li>Scripture Text Question</li>
                    <li>Essence Question</li>
                    <li>Quotation Question</li>
                </ul>
            </div>
        )
    }
}

export default HelpApp;