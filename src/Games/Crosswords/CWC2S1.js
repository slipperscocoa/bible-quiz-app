import React from 'react';
import ScriptTag from 'react-script-tag';
// import { Helmet } from 'react-helmet';
// import postscribe from 'postscribe';

// const element = (
//     <script type="text/javascript" src="https://CrosswordHobbyist.com/embedjs?puzzle_id=12345"></script>
// );


class CWC2S1App extends React.Component {
    render() {
        return (
            <div id="crossword">
                <ScriptTag isHydrating={true} type="text/javascript" src="https://CrosswordHobbyist.com/embedjs?puzzle_id=938513" />
                {/* <button onClick={element}>Click</button> */}
                {/* <a href="https://crosswordlabs.com/embed/favorite-authors-7">Click</a> */}
                {/* <iframe 
                    title="crossword"
                    width="500" 
                    height="500" 
                    style={{backgroundColor: "white", padding: "5px 0px 0 5px", border: "3px solid black", margin: "auto", display: "block"}} 
                    frameBorder="0" 
                    src="https://CrosswordHobbyist.com/embedjs?puzzle_id=938513"
                ></iframe> */}
                {/* <Helmet>
                    <script src="https://www.puzzlefast.com/en/puzzles/2021072723590350E/embed-script?width=600px&height=800px" type="text/javascript"></script>
                </Helmet> */}
                {/* <script type="text/javascript">
                    $(function() {
                        postscribe('#ad', '<script src=doubleclick_url_with_params><\/script>', {
                            done: function () {
                                console.info('Dblclick script has been delivered.');
                            }
                        });
                    });
                </script> */}
                {/* <script type="text/javascript">
                    postscribe('#crossword', '<script src="https://www.puzzlefast.com/en/puzzles/2021072723590350E/embed-script?width=600px&height=800px"/>');
                </script> */}
                
            </div>

        )
    }
}

export default CWC2S1App;