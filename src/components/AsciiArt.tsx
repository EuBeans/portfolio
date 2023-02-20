
import React from "react";
import {theme} from '../assets/theme';


// props type for the dots component
interface AsciiArtProps {
    type: "keyboard" | "computer" | "artLinux"
    fontSize: string;
    color?: string;

}

export default function AsciiArt(props: AsciiArtProps) {
    
    // props to var
    const {type,fontSize,color} = props;

        //art for keyboard
        const artKeyboard = 
        `
        ,---,---,---,---,---,---,---,---,---,---,---,---,---,-------,
        | ~ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | [ | ] | <-    |
        |---'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-----|
        | ->| | " | , | . | P | Y | F | G | C | R | L | / | = |  \  |
        |-----',--',--',--',--',--',--',--',--',--',--',--',--'-----|
        | Caps | A | O | E | U | I | D | H | T | N | S | - |  Enter |
        |------'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'--------|
        |        | ; | Q | J | K | X | B | M | W | V | Z |          |
        |------,-',--'--,'---'---'---'---'---'---'-,-'---',--,------|
        | ctrl |  | alt |                          | alt  |  | ctrl |
        '------'  '-----'--------------------------'------'  '------'
        `

        const artComputer =
        `
                    .----.
        .---------. | == |
        |.-"""""-.| |----|
        ||       || | == |
        ||       || |----|
        |'-.....-'| |::::|
         \`")---("\`  |___.|
       /:::::::::::\`    "
      /:::=======:::\`\
      `

      const artLinux =
        `
        _nnnn_
        dGGGGMMb
       @p~qp~~qMb
       M|@||@) M|
       @,----.JM|
      JS^\__/  qKL
     dZP        qKRb
    dZP          qKKb
   fZP            SMMb
   HZM            MMMM
   FqM            MMMM
 __| ".        |\dS"qML
 |    '.       | '' \Zq
_)      \.___.,|     .'
\____   )MMMMMP|   .'
    '-'       '--' 
        `


    // check what type of art to return
    const art = () => {
        if (type === "keyboard") {
            return artKeyboard
        } else if (type === "computer") {
            return artComputer
        } else if (type === "artLinux") {
            return artLinux
        }
    }



    const artStyle = {
        color: color ? color :theme.palette.background.secondary ,
        fontFamily: theme.typography.fontFamily2,
        fontSize: fontSize,
        fontWeight: theme.typography.h6.fontWeight,      
    }
    
    // function that return a linux ascii art
    const asciiArt = () => {

        return (
            <div>
                <pre
                    id="taag_output_text"
                    style={ {...artStyle}}
                    contentEditable="false"
                >
                    {art()}
                </pre>
                
            </div>
            )
    }

    return (
        <div className="ascii-art">
            {asciiArt()}
        </div>
    )

}
