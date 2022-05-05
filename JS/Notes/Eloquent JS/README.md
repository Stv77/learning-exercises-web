<blockquote><small>This is a note for exercises in <a href="https://eloquentjavascript.net/">Eloquent JavaScript</a></blockquote>

# <a href="https://eloquentjavascript.net/02_program_structure.html">Program Structure</a>

<details>

- <a href="https://eloquentjavascript.net/02_program_structure.html#i_umoXp9u0e7">Looping a triangle</a>
    <details>

    ```
    // Your code here.
    let hashTag = "#";
    while (hashTag.length <= 7) {
      console.log(hashTag);
      hashTag+="#"
    }
    ```

    </details>
  
- <a href="https://eloquentjavascript.net/02_program_structure.html#i_rebKE3gdjV">Fizzbuzz</a>
    <details>

    ```
    // Your code here.
    for(i = 1; i <= 100; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      }
      else if(i % 3 === 0) {
        console.log("Fizz");
      }
      else if(i % 5 === 0) {
        console.log("Buzz");
      }
      else if (i % 5 !== 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
    ```

    </details>
  
- <a href="https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ">Chessboard</a>
    <details>

    ```
    // Your code here.
    var board= "";

    for(i = 0; i <= 8; i++) {
      for(j = 0; j <= 8; j++) {
        if((i + j) % 2 === 0)
          board+=" ";
        else
          board+="#";
      }
      board+="\n";
    }

    console.log(board);
    ```

    </details>

</details>
