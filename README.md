# Codenames Notes

## Themes

### RHOC

1. Create a word list with RHOC characters, locales, phrases, etc.

   ```js
   let rhocWordList = ['Tamra', 'Kelly Dodd']
   ```

2. Update the project so that the board generated uses those words (only?).
   
   > Update the variable called in JS to point towards my new list.

   > Have JS point to a txt file in project named `words.txt` and 
   > have that be set to symbolically link to words_all.txt but write/load 
   > a txt file of the RHOC words as  `words_rhoc.txt` and change `words.txt`
   > to point to that instead :)

* * *

<head>

<style>
* {
    box-sizing: border-box;
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
    /* default card background color */
    padding: 1em;
}

.cardWordWrapper {
    background: pink;
    display: flex;
    flex-flow: row wrap;
    max-width: 90%;
}

.cardWord {
    flex: 1 100%;
    max-width: 90%;
    border: 1px red;
    background-color: blue;
    color: white;
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

<summary> Click me to view the demo!</summary>

<br>

<div class="wrapper">
    <div class="one">
    <div>(1,1)</div>
    <div>(1,2)</div>  
    <div>(1,3)</div>
    <div>(1,4)</div>
    <div>(1,5)</div>
    </div>
    <div class="two">
    <div>HI THERE</div>
    <div>(1,2)</div>  
    <div>(1,3)</div>
    <div>(1,4)</div>
    <div>(1,5)</div>
    </div>
    <div class="three">
    <div>
        <div class="cardWordWrapper">
        <span class="cardWord">
            BEETHOVEN
        </span>
        </div>    
    </div>
    <div>A</div>  
    <div>(1,3)</div>
    <div>(1,4)</div>
    <div>(1,5)</div>
    </div>
    <div class="four">
    <div>(1,1)</div>
    <div>(1,2)</div>  
    <div>(1,3)</div>
    <div>(1,4)</div>
    <div>(1,5)</div>
    </div>
    <div class="five">
    <div>(1,1)</div>
    <div>(1,2)</div>  
    <div>(1,3)</div>
    <div>(1,4)</div>
    <div>(1,5)</div>
    </div>
</div>

</details>

</body>