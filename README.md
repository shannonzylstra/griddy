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