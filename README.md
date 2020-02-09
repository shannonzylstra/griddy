Codenames
=========

The popular boardgame is also an interactive web app!

<img src="./img/demo.png">

 ## Rules of the Game

<img src="https://cf.geekdo-images.com/imagepage/img/xu0rMQnOxyWN01DgEMAraXrf9KA=/fit-in/900x600/filters:no_upscale()/pic2669785.jpg">

* PDF: [Instructions](https://czechgames.com/files/rules/codenames-rules-en.pdf)
* Video: [How to Play Codenames in 3 Minutes][]

[How to Play Codenames in 3 Minutes]: https://www.youtube.com/watch?v=zQVHkl8oQEU

* * *

<head>

<style>
* {
    box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-family: 'Roboto', sans-serif;
}

@font-face {
    font-family: 'SkyFall Done';
    src: url('/font/skyfall_done.ttf');
}

h1 {
    font-family: SkyFall Done, Roboto, sans-serif;
    text-align: center;
}
.controls {
    display: grid;
    grid-template-areas: "mode restart"
}

.controls>div.mode {
    grid-area: "mode";
}

.controls>div.restart {
    text-align: right;
    grid-area: "restart";
}

.wrapper,
.wrapper>div,
.cardWordWrapper {
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    max-width: 940px;
    margin: 0 auto;
}

.wrapper>div,
.wrapper>div>div {
    color: #d9480f;
}

.wrapper>div {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    /*border: 2px solid whitesmoke;*/
    background-color: white;
    padding: .25em;
    /* fix: minimum width of 0 */
    grid-template-columns: repeat(5, minmax(0, 300px));
}

.wrapper>div>div {
    border: 2px solid rgb(233, 171, 88);
    border-radius: 5px;
    background-color: rgba(233, 171, 88, .5);
    background-size: cover;
    padding: 1em;
}

.clicked.red, .spy.red {
    transform: rotateY(180deg);
    background-image: url(./img/codenames-red_agent-man.jpg);
    background-size: 100% 100%;
}

.clicked.blue, .spy.blue {
    transform: rotateY(180deg);
    background-image: url(./img/codenames-blue_agent-woman.png);
    background-size: 100% 100%;
}

.clicked.assassin, .spy.assassin {
    transform: rotateY(180deg);
    background: black;
    background-image: url(./img/codenames-assassin.jpg);
    background-size: 100% 100%;
}

.clicked.neutral, .spy.neutral {
    transform: rotateY(180deg);
    background-image: url(./img/codenames-bystander.jpg);
    background-size: 100% 100%;
}

.cardWordWrapper {
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
    overflow-wrap: break-word;
}

.cardWord {
    flex: 1 100%;
    max-width: 100%;
}

.one {
    grid-row: 1;
}

.two {
    grid-row: 2;
}

.three {
    grid-row: 3;
}

.four {
    grid-row: 4;
}

.five {
    grid-row: 5;
}
</style>

</head>
<body>

<details>

<summary> Click me to view an example board!</summary>

<br>
        <header class="">
            <h1>CODENAMES</h1>
            <div class="scoreWrapper">
                <div class="scoreElement">
                    <h3>
                        <span id="team1Score" style="color: red;"></span>
                        <span style="color: black"> - </span>
                        <span id="team2Score" style="color: blue;"></span>
                    </h3>
                </div>
            </div>
        </header>
       <div class="wrapper" id="board">
            <div class="one">
                <div class="card SNOWMAN,blue,PALM,blue,ARM,neutral,AZTEC,blue,TORCH,red unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="SNOWMAN">SNOWMAN</div>
                    </div>
                </div>
                <div class="card HOSPITAL,blue,MOLE,blue,EMBASSY,red,POLICE,neutral,PLOT,blue unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="PALM">PALM</div>
                    </div>
                </div>
                <div class="card BELL,neutral,LEAD,neutral,PUPIL,blue,ICE,neutral,STICK,red unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="ARM">ARM</div>
                    </div>
                </div>
                <div class="card SERVER,red,SKYSCRAPER,red,TRIANGLE,neutral,MOON,red,PRINCESS,red unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="AZTEC">AZTEC</div>
                    </div>
                </div>
                <div class="card MUG,red,WITCH,red,NINJA,assassin,POOL,blue,PAN,neutral unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="TORCH">TORCH</div>
                    </div>
                </div>
          </div>
          <div class="two">
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="HOSPITAL">HOSPITAL</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="MOLE">MOLE</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="EMBASSY">EMBASSY</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="POLICE">POLICE</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="PLOT">PLOT</div>
                    </div>
                </div>
          </div>
          <div class="three">
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="BELL">BELL</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="LEAD">LEAD</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="PUPIL">PUPIL</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="ICE">ICE</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="STICK">STICK</div>
                    </div>
                </div>
          </div>
          <div class="four">
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="SERVER">SERVER</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="SKYSCRAPER">SKYSCRAPER</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="TRIANGLE">TRIANGLE</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="MOON">MOON</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="PRINCESS">PRINCESS</div>
                    </div>
                </div>
          </div>
          <div class="five">
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="MUG">MUG</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="WITCH">WITCH</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="NINJA">NINJA</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="POOL">POOL</div>
                    </div>
                </div>
                <div class="card undefined unclicked">
                    <div class="cardWordWrapper">
                        <div class="cardWord" style="text-align: center;" id="PAN">PAN</div>
                    </div>
                </div>
          </div>
        </div>