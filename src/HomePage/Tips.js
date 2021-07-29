import React from 'react'; 

class TipsApp extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-warning" style={{ textAlign: 'center', paddingTop: '90px' }}>Tips</h2> 
                <br/>
                <p>Every quizzer studies differently, so we asked several veteran TBQers to share the methods and practices they use to make their study time most effective: </p>
                <h3 className="text-warning">Quizzing Tactics:</h3>
                <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                    <li><em>The advice I always give is to know what you know and buzz in before you know the answer. Trust yourself and you'll be way faster.</em></li>
                    <br/>
                    <li><em>Don't overthink it.  You've studied enough and practiced enough that by the time you get to the meet your brain can start getting in the way.  Don't hesitate, but trust your gut - if you think you know the answer you probably do. </em></li>
                    <br/>
                    <li><em>Don't worry about specific wording when in the meet.  When you're practicing, nail those odd phrases, baby.  But when you're in the meet, don't spend time stressing over whether you have the wording exactly right - it's the heart that's more important.</em></li>
                    <br/>
                    <li><em> Do know the rules and the rulebook.  The more familiar you are with them, the easier it is to contest, and you need to less often.  When you do contest, know which rule you're referencing and speak confidently but not arrogantly. </em></li>
                </ul>
                <br/>
                <h3 className="text-warning">Memorization Tactics:</h3>
                <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                    <li><em>Memorize verse numbers along with the text.  The way I do it is to record myself reading the portion aloud, including the verse numbers, and listen to it on repeat.  Then when I'm reviewing, I flash the ASL (American Sign Language) numbers to mark the verses.  </em></li>
                    <br/>
                    <li><em>Before you even begin memorizing, understand what's going on in the passage.  Seriously. I know this sounds like your mom trying to get you to do more work but if you understand why the text says what it does it will be both easier to memorize and easier to quiz on.  You can start researching the first chapter as soon as finals are over, and then study chapter two while you memorize chapter one.  Geek out over it as much as you can - I promise it'll make more sense and be more fun.</em></li>
                </ul>
                
            </div>
        )
    }
}

export default TipsApp; 